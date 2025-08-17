package com.mirror.repository

import com.mirror.entity.Note
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface NoteRepository : JpaRepository<Note, Long> {
    
    fun findByDate(date: String): List<Note>
    
    @Query("SELECT n FROM Note n WHERE n.title LIKE %:keyword% OR n.content LIKE %:keyword%")
    fun findByKeyword(@Param("keyword") keyword: String): List<Note>
    
    @Query("SELECT n FROM Note n JOIN n.tags t WHERE t IN :tags")
    fun findByTags(@Param("tags") tags: Set<String>): List<Note>
    
    @Query("SELECT n FROM Note n JOIN n.people p WHERE p IN :people")
    fun findByPeople(@Param("people") people: Set<String>): List<Note>
    
    fun findByOrderByCreatedAtDesc(): List<Note>
    
    @Query("SELECT DISTINCT n.date FROM Note n ORDER BY n.date DESC")
    fun findAllDates(): List<String>
    
    @Query("SELECT DISTINCT t FROM Note n JOIN n.tags t")
    fun findAllTags(): List<String>
    
    @Query("SELECT DISTINCT p FROM Note n JOIN n.people p")
    fun findAllPeople(): List<String>
} 