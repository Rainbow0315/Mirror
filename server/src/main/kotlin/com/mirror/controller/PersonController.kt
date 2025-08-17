package com.mirror.controller

import com.mirror.dto.*
import com.mirror.service.PersonService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import jakarta.validation.Valid

@RestController
@RequestMapping("/people")
@CrossOrigin(origins = ["http://localhost:3000"])
class PersonController(
    private val personService: PersonService
) {
    
    @GetMapping
    fun getAllPeople(): ResponseEntity<List<PersonDto>> {
        val people = personService.getAllPeople()
        return ResponseEntity.ok(people)
    }
    
    @GetMapping("/{id}")
    fun getPersonById(@PathVariable id: Long): ResponseEntity<PersonDto> {
        val person = personService.getPersonById(id)
        return ResponseEntity.ok(person)
    }
    
    @GetMapping("/name/{name}")
    fun getPeopleByName(@PathVariable name: String): ResponseEntity<List<PersonDto>> {
        val people = personService.getPeopleByName(name)
        return ResponseEntity.ok(people)
    }
    
    @GetMapping("/relationship/{relationship}")
    fun getPeopleByRelationship(@PathVariable relationship: String): ResponseEntity<List<PersonDto>> {
        val people = personService.getPeopleByRelationship(relationship)
        return ResponseEntity.ok(people)
    }
    
    @GetMapping("/location/{location}")
    fun getPeopleByLocation(@PathVariable location: String): ResponseEntity<List<PersonDto>> {
        val people = personService.getPeopleByLocation(location)
        return ResponseEntity.ok(people)
    }
    
    @GetMapping("/search")
    fun searchPeople(@RequestParam keyword: String): ResponseEntity<List<PersonDto>> {
        val people = personService.searchPeople(keyword)
        return ResponseEntity.ok(people)
    }
    
    @GetMapping("/tags")
    fun getPeopleByTags(@RequestParam tags: Set<String>): ResponseEntity<List<PersonDto>> {
        val people = personService.getPeopleByTags(tags)
        return ResponseEntity.ok(people)
    }
    
    @GetMapping("/last-interaction")
    fun getPeopleByLastInteraction(): ResponseEntity<List<PersonDto>> {
        val people = personService.getPeopleByLastInteraction()
        return ResponseEntity.ok(people)
    }
    
    @GetMapping("/relationships")
    fun getAllRelationships(): ResponseEntity<List<String>> {
        val relationships = personService.getAllRelationships()
        return ResponseEntity.ok(relationships)
    }
    
    @GetMapping("/locations")
    fun getAllLocations(): ResponseEntity<List<String>> {
        val locations = personService.getAllLocations()
        return ResponseEntity.ok(locations)
    }
    
    @GetMapping("/all-tags")
    fun getAllTags(): ResponseEntity<List<String>> {
        val tags = personService.getAllTags()
        return ResponseEntity.ok(tags)
    }
    
    @PostMapping
    fun createPerson(@Valid @RequestBody request: CreatePersonRequest): ResponseEntity<PersonDto> {
        val person = personService.createPerson(request)
        return ResponseEntity.status(HttpStatus.CREATED).body(person)
    }
    
    @PutMapping("/{id}")
    fun updatePerson(
        @PathVariable id: Long,
        @Valid @RequestBody request: UpdatePersonRequest
    ): ResponseEntity<PersonDto> {
        val person = personService.updatePerson(id, request)
        return ResponseEntity.ok(person)
    }
    
    @DeleteMapping("/{id}")
    fun deletePerson(@PathVariable id: Long): ResponseEntity<Unit> {
        personService.deletePerson(id)
        return ResponseEntity.noContent().build()
    }
    
    @PostMapping("/{id}/gifts")
    fun addGiftToPerson(
        @PathVariable id: Long,
        @Valid @RequestBody request: AddGiftRequest
    ): ResponseEntity<PersonDto> {
        val person = personService.addGiftToPerson(id, request)
        return ResponseEntity.ok(person)
    }
    
    @DeleteMapping("/{personId}/gifts/{giftId}")
    fun removeGiftFromPerson(
        @PathVariable personId: Long,
        @PathVariable giftId: Long
    ): ResponseEntity<PersonDto> {
        val person = personService.removeGiftFromPerson(personId, giftId)
        return ResponseEntity.ok(person)
    }
}
