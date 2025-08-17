package com.mirror.service

import com.mirror.dto.*
import com.mirror.entity.Gift
import com.mirror.entity.Person
import com.mirror.repository.PersonRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime

@Service
@Transactional
class PersonService(
    private val personRepository: PersonRepository
) {
    
    fun getAllPeople(): List<PersonDto> {
        return personRepository.findByOrderByCreatedAtDesc()
            .map { it.toDto() }
    }
    
    fun getPersonById(id: Long): PersonDto {
        val person = personRepository.findById(id)
            .orElseThrow { IllegalArgumentException("Person not found with id: $id") }
        return person.toDto()
    }
    
    fun getPeopleByName(name: String): List<PersonDto> {
        return personRepository.findByNameContainingIgnoreCase(name)
            .map { it.toDto() }
    }
    
    fun getPeopleByRelationship(relationship: String): List<PersonDto> {
        return personRepository.findByRelationship(relationship)
            .map { it.toDto() }
    }
    
    fun getPeopleByLocation(location: String): List<PersonDto> {
        return personRepository.findByLocationContainingIgnoreCase(location)
            .map { it.toDto() }
    }
    
    fun searchPeople(keyword: String): List<PersonDto> {
        return personRepository.findByKeyword(keyword)
            .map { it.toDto() }
    }
    
    fun getPeopleByTags(tags: Set<String>): List<PersonDto> {
        return personRepository.findByTags(tags)
            .map { it.toDto() }
    }
    
    fun getPeopleByLastInteraction(): List<PersonDto> {
        return personRepository.findByOrderByLastInteractionDesc()
            .map { it.toDto() }
    }
    
    fun getAllRelationships(): List<String> {
        return personRepository.findAllRelationships()
    }
    
    fun getAllLocations(): List<String> {
        return personRepository.findAllLocations()
    }
    
    fun getAllTags(): List<String> {
        return personRepository.findAllTags()
    }
    
    fun createPerson(request: CreatePersonRequest): PersonDto {
        val person = Person(
            name = request.name,
            relationship = request.relationship,
            location = request.location,
            lastInteraction = request.lastInteraction,
            interactionType = request.interactionType,
            notes = request.notes.toMutableSet(),
            tags = request.tags.toMutableSet(),
            likes = request.likes.toMutableSet(),
            dislikes = request.dislikes.toMutableSet(),
            avatar = request.avatar
        )
        
        val savedPerson = personRepository.save(person)
        return savedPerson.toDto()
    }
    
    fun updatePerson(id: Long, request: UpdatePersonRequest): PersonDto {
        val person = personRepository.findById(id)
            .orElseThrow { IllegalArgumentException("Person not found with id: $id") }
        
        request.name?.let { person.name = it }
        request.relationship?.let { person.relationship = it }
        request.location?.let { person.location = it }
        request.lastInteraction?.let { person.lastInteraction = it }
        request.interactionType?.let { person.interactionType = it }
        request.notes?.let { person.notes = it.toMutableSet() }
        request.tags?.let { person.tags = it.toMutableSet() }
        request.likes?.let { person.likes = it.toMutableSet() }
        request.dislikes?.let { person.dislikes = it.toMutableSet() }
        request.avatar?.let { person.avatar = it }
        
        val updatedPerson = personRepository.save(person)
        return updatedPerson.toDto()
    }
    
    fun deletePerson(id: Long) {
        if (!personRepository.existsById(id)) {
            throw IllegalArgumentException("Person not found with id: $id")
        }
        personRepository.deleteById(id)
    }
    
    fun addGiftToPerson(personId: Long, request: AddGiftRequest): PersonDto {
        val person = personRepository.findById(personId)
            .orElseThrow { IllegalArgumentException("Person not found with id: $personId") }
        
        val gift = Gift(
            type = request.type,
            item = request.item,
            date = request.date
        )
        
        person.gifts.add(gift)
        val updatedPerson = personRepository.save(person)
        return updatedPerson.toDto()
    }
    
    fun removeGiftFromPerson(personId: Long, giftId: Long): PersonDto {
        val person = personRepository.findById(personId)
            .orElseThrow { IllegalArgumentException("Person not found with id: $personId") }
        
        val gift = person.gifts.find { it.id == giftId }
            ?: throw IllegalArgumentException("Gift not found with id: $giftId")
        
        person.gifts.remove(gift)
        val updatedPerson = personRepository.save(person)
        return updatedPerson.toDto()
    }
    
    private fun Person.toDto(): PersonDto {
        return PersonDto(
            id = this.id,
            name = this.name,
            relationship = this.relationship,
            location = this.location,
            lastInteraction = this.lastInteraction,
            interactionType = this.interactionType,
            notes = this.notes,
            tags = this.tags,
            likes = this.likes,
            dislikes = this.dislikes,
            gifts = this.gifts.map { it.toDto() }.toSet(),
            avatar = this.avatar,
            createdAt = this.createdAt,
            updatedAt = this.updatedAt
        )
    }
    
    private fun Gift.toDto(): GiftDto {
        return GiftDto(
            id = this.id,
            type = this.type,
            item = this.item,
            date = this.date
        )
    }
}
