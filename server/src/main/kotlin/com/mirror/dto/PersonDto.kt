package com.mirror.dto

import com.mirror.entity.Gift
import com.mirror.entity.GiftType
import java.time.LocalDateTime

data class PersonDto(
    val id: Long? = null,
    val name: String,
    val relationship: String,
    val location: String,
    val lastInteraction: LocalDateTime? = null,
    val interactionType: String? = null,
    val notes: Set<String> = emptySet(),
    val tags: Set<String> = emptySet(),
    val likes: Set<String> = emptySet(),
    val dislikes: Set<String> = emptySet(),
    val gifts: Set<GiftDto> = emptySet(),
    val avatar: String? = null,
    val createdAt: LocalDateTime? = null,
    val updatedAt: LocalDateTime? = null
)

data class GiftDto(
    val id: Long? = null,
    val type: GiftType,
    val item: String,
    val date: LocalDateTime
)

data class CreatePersonRequest(
    val name: String,
    val relationship: String,
    val location: String,
    val lastInteraction: LocalDateTime? = null,
    val interactionType: String? = null,
    val notes: Set<String> = emptySet(),
    val tags: Set<String> = emptySet(),
    val likes: Set<String> = emptySet(),
    val dislikes: Set<String> = emptySet(),
    val avatar: String? = null
)

data class UpdatePersonRequest(
    val name: String? = null,
    val relationship: String? = null,
    val location: String? = null,
    val lastInteraction: LocalDateTime? = null,
    val interactionType: String? = null,
    val notes: Set<String>? = null,
    val tags: Set<String>? = null,
    val likes: Set<String>? = null,
    val dislikes: Set<String>? = null,
    val avatar: String? = null
)

data class AddGiftRequest(
    val type: GiftType,
    val item: String,
    val date: LocalDateTime = LocalDateTime.now()
)
