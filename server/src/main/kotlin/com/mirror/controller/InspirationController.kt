package com.mirror.controller

import com.mirror.dto.CreateInspirationRequest
import com.mirror.dto.InspirationDto
import com.mirror.dto.UpdateInspirationRequest
import com.mirror.entity.InspirationType
import com.mirror.service.InspirationService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import jakarta.validation.Valid

@RestController
@RequestMapping("/inspirations")
@CrossOrigin(origins = ["http://localhost:3000"])
class InspirationController(
    private val inspirationService: InspirationService
) {
    
    @GetMapping
    fun getAllInspirations(): ResponseEntity<List<InspirationDto>> {
        val inspirations = inspirationService.getAllInspirations()
        return ResponseEntity.ok(inspirations)
    }
    
    @GetMapping("/{id}")
    fun getInspirationById(@PathVariable id: Long): ResponseEntity<InspirationDto> {
        val inspiration = inspirationService.getInspirationById(id)
        return ResponseEntity.ok(inspiration)
    }
    
    @GetMapping("/type/{type}")
    fun getInspirationsByType(@PathVariable type: InspirationType): ResponseEntity<List<InspirationDto>> {
        val inspirations = inspirationService.getInspirationsByType(type)
        return ResponseEntity.ok(inspirations)
    }
    
    @GetMapping("/mood/{mood}")
    fun getInspirationsByMood(@PathVariable mood: String): ResponseEntity<List<InspirationDto>> {
        val inspirations = inspirationService.getInspirationsByMood(mood)
        return ResponseEntity.ok(inspirations)
    }
    
    @GetMapping("/search")
    fun searchInspirations(@RequestParam keyword: String): ResponseEntity<List<InspirationDto>> {
        val inspirations = inspirationService.searchInspirations(keyword)
        return ResponseEntity.ok(inspirations)
    }
    
    @GetMapping("/tags")
    fun getInspirationsByTags(@RequestParam tags: Set<String>): ResponseEntity<List<InspirationDto>> {
        val inspirations = inspirationService.getInspirationsByTags(tags)
        return ResponseEntity.ok(inspirations)
    }
    
    @GetMapping("/types")
    fun getAllTypes(): ResponseEntity<List<InspirationType>> {
        val types = inspirationService.getAllTypes()
        return ResponseEntity.ok(types)
    }
    
    @GetMapping("/moods")
    fun getAllMoods(): ResponseEntity<List<String>> {
        val moods = inspirationService.getAllMoods()
        return ResponseEntity.ok(moods)
    }
    
    @PostMapping
    fun createInspiration(@Valid @RequestBody request: CreateInspirationRequest): ResponseEntity<InspirationDto> {
        val inspiration = inspirationService.createInspiration(request)
        return ResponseEntity.status(HttpStatus.CREATED).body(inspiration)
    }
    
    @PutMapping("/{id}")
    fun updateInspiration(
        @PathVariable id: Long,
        @Valid @RequestBody request: UpdateInspirationRequest
    ): ResponseEntity<InspirationDto> {
        val inspiration = inspirationService.updateInspiration(id, request)
        return ResponseEntity.ok(inspiration)
    }
    
    @DeleteMapping("/{id}")
    fun deleteInspiration(@PathVariable id: Long): ResponseEntity<Unit> {
        inspirationService.deleteInspiration(id)
        return ResponseEntity.noContent().build()
    }
}
