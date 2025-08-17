package com.mirror.service

import com.mirror.dto.CreateInspirationRequest
import com.mirror.dto.InspirationDto
import com.mirror.dto.UpdateInspirationRequest
import com.mirror.entity.Inspiration
import com.mirror.entity.InspirationType
import com.mirror.repository.InspirationRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime

@Service
@Transactional
class InspirationService(
    private val inspirationRepository: InspirationRepository
) {
    
    fun getAllInspirations(): List<InspirationDto> {
        return inspirationRepository.findByOrderByCreatedAtDesc()
            .map { it.toDto() }
    }
    
    fun getInspirationById(id: Long): InspirationDto {
        val inspiration = inspirationRepository.findById(id)
            .orElseThrow { IllegalArgumentException("Inspiration not found with id: $id") }
        return inspiration.toDto()
    }
    
    fun getInspirationsByType(type: InspirationType): List<InspirationDto> {
        return inspirationRepository.findByType(type)
            .map { it.toDto() }
    }
    
    fun getInspirationsByMood(mood: String): List<InspirationDto> {
        return inspirationRepository.findByMoodContainingIgnoreCase(mood)
            .map { it.toDto() }
    }
    
    fun searchInspirations(keyword: String): List<InspirationDto> {
        return inspirationRepository.findByKeyword(keyword)
            .map { it.toDto() }
    }
    
    fun getInspirationsByTags(tags: Set<String>): List<InspirationDto> {
        return inspirationRepository.findByTags(tags)
            .map { it.toDto() }
    }
    
    fun getAllTypes(): List<InspirationType> {
        return inspirationRepository.findAllTypes()
    }
    
    fun getAllMoods(): List<String> {
        return inspirationRepository.findAllMoods()
    }
    
    fun createInspiration(request: CreateInspirationRequest): InspirationDto {
        val inspiration = Inspiration(
            title = request.title,
            content = request.content,
            type = request.type,
            mood = request.mood,
            tags = request.tags.toMutableSet(),
            source = request.source
        )
        
        val savedInspiration = inspirationRepository.save(inspiration)
        return savedInspiration.toDto()
    }
    
    fun updateInspiration(id: Long, request: UpdateInspirationRequest): InspirationDto {
        val inspiration = inspirationRepository.findById(id)
            .orElseThrow { IllegalArgumentException("Inspiration not found with id: $id") }
        
        request.title?.let { inspiration.title = it }
        request.content?.let { inspiration.content = it }
        request.type?.let { inspiration.type = it }
        request.mood?.let { inspiration.mood = it }
        request.tags?.let { inspiration.tags = it.toMutableSet() }
        request.source?.let { inspiration.source = it }
        
        val updatedInspiration = inspirationRepository.save(inspiration)
        return updatedInspiration.toDto()
    }
    
    fun deleteInspiration(id: Long) {
        if (!inspirationRepository.existsById(id)) {
            throw IllegalArgumentException("Inspiration not found with id: $id")
        }
        inspirationRepository.deleteById(id)
    }
    
    private fun Inspiration.toDto(): InspirationDto {
        return InspirationDto(
            id = this.id,
            title = this.title,
            content = this.content,
            type = this.type,
            mood = this.mood,
            tags = this.tags,
            source = this.source,
            createdAt = this.createdAt,
            updatedAt = this.updatedAt
        )
    }
}
