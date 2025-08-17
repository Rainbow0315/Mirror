package com.mirror.repository

import com.mirror.entity.Person
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface PersonRepository : JpaRepository<Person, Long> {
    
    fun findByNameContainingIgnoreCase(name: String): List<Person>
    
    fun findByRelationship(relationship: String): List<Person>
    
    fun findByLocationContainingIgnoreCase(location: String): List<Person>
    
    @Query("SELECT p FROM Person p WHERE p.name LIKE %:keyword% OR p.relationship LIKE %:keyword%")
    fun findByKeyword(@Param("keyword") keyword: String): List<Person>
    
    @Query("SELECT p FROM Person p JOIN p.tags t WHERE t IN :tags")
    fun findByTags(@Param("tags") tags: Set<String>): List<Person>
    
    fun findByOrderByLastInteractionDesc(): List<Person>
    
    fun findByOrderByCreatedAtDesc(): List<Person>
    
    @Query("SELECT DISTINCT p.relationship FROM Person p")
    fun findAllRelationships(): List<String>
    
    @Query("SELECT DISTINCT p.location FROM Person p")
    fun findAllLocations(): List<String>
    
    @Query("SELECT DISTINCT t FROM Person p JOIN p.tags t")
    fun findAllTags(): List<String>
}
