package com.mirror.entity

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "inspirations")
data class Inspiration(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,
    
    @Column(nullable = false)
    var title: String,
    
    @Column(columnDefinition = "TEXT")
    var content: String,
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    var type: InspirationType,
    
    @Column(nullable = false)
    var mood: String,
    
    @ElementCollection
    @CollectionTable(name = "inspiration_tags", joinColumns = [JoinColumn(name = "inspiration_id")])
    @Column(name = "tag")
    var tags: MutableSet<String> = mutableSetOf(),
    
    var source: String? = null,
    
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

enum class InspirationType {
    WRITING, ART, MUSIC, PHOTOGRAPHY, OTHER
} 