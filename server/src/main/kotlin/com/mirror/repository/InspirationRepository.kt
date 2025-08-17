package com.mirror.repository

import com.mirror.entity.Inspiration
import com.mirror.entity.InspirationType
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface InspirationRepository : JpaRepository<Inspiration, Long> {
    
    fun findByType(type: InspirationType): List<Inspiration>
    
    fun findByMoodContainingIgnoreCase(mood: String): List<Inspiration>
    
    @Query("SELECT i FROM Inspiration i WHERE i.title LIKE %:keyword% OR i.content LIKE %:keyword%")
    fun findByKeyword(@Param("keyword") keyword: String): List<Inspiration>
    
    @Query("SELECT i FROM Inspiration i JOIN i.tags t WHERE t IN :tags")
    fun findByTags(@Param("tags") tags: Set<String>): List<Inspiration>
    
    fun findByOrderByCreatedAtDesc(): List<Inspiration>
    
    @Query("SELECT DISTINCT i.type FROM Inspiration i")
    fun findAllTypes(): List<InspirationType>
    
    @Query("SELECT DISTINCT i.mood FROM Inspiration i")
    fun findAllMoods(): List<String>
} 