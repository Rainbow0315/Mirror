package com.mirror.entity

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "people")
data class Person(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,
    
    @Column(nullable = false)
    var name: String,
    
    @Column(nullable = false)
    var relationship: String,
    
    var location: String,
    
    @Column(name = "last_interaction")
    var lastInteraction: LocalDateTime? = null,
    
    @Column(name = "interaction_type")
    var interactionType: String? = null,
    
    @ElementCollection
    @CollectionTable(name = "person_notes", joinColumns = [JoinColumn(name = "person_id")])
    @Column(name = "note", columnDefinition = "TEXT")
    var notes: MutableSet<String> = mutableSetOf(),
    
    @ElementCollection
    @CollectionTable(name = "person_tags", joinColumns = [JoinColumn(name = "person_id")])
    @Column(name = "tag")
    var tags: MutableSet<String> = mutableSetOf(),
    
    @ElementCollection
    @CollectionTable(name = "person_likes", joinColumns = [JoinColumn(name = "person_id")])
    @Column(name = "like_item")
    var likes: MutableSet<String> = mutableSetOf(),
    
    @ElementCollection
    @CollectionTable(name = "person_dislikes", joinColumns = [JoinColumn(name = "person_id")])
    @Column(name = "dislike_item")
    var dislikes: MutableSet<String> = mutableSetOf(),
    
    @OneToMany(cascade = [CascadeType.ALL], orphanRemoval = true)
    @JoinColumn(name = "person_id")
    var gifts: MutableSet<Gift> = mutableSetOf(),
    
    var avatar: String? = null,
    
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

@Entity
@Table(name = "gifts")
data class Gift(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    var type: GiftType,
    
    @Column(nullable = false)
    var item: String,
    
    @Column(nullable = false)
    var date: LocalDateTime = LocalDateTime.now()
)

enum class GiftType {
    GIVEN, RECEIVED
} 