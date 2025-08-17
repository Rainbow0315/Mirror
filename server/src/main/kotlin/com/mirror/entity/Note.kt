package com.mirror.entity

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "notes")
data class Note(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,
    
    @Column(nullable = false)
    var title: String,
    
    @Column(columnDefinition = "TEXT")
    var content: String,
    
    @Column(nullable = false)
    var date: String,
    
    @ElementCollection
    @CollectionTable(name = "note_tags", joinColumns = [JoinColumn(name = "note_id")])
    @Column(name = "tag")
    var tags: MutableSet<String> = mutableSetOf(),
    
    @ElementCollection
    @CollectionTable(name = "note_people", joinColumns = [JoinColumn(name = "note_id")])
    @Column(name = "person")
    var people: MutableSet<String> = mutableSetOf(),
    
    @Column(name = "created_at", nullable = false, updatable = false)
    var createdAt: LocalDateTime = LocalDateTime.now(),
    
    @Column(name = "updated_at", nullable = false)
    var updatedAt: LocalDateTime = LocalDateTime.now()
) {
    @PreUpdate
    fun preUpdate() {
        updatedAt = LocalDateTime.now()
    }
} 