package com.mirror.dto

import com.mirror.entity.InspirationType
import java.time.LocalDateTime

data class InspirationDto(
    val id: Long? = null,
    val title: String,
    val content: String,
    val type: InspirationType,
    val mood: String,
    val tags: Set<String> = emptySet(),
    val source: String? = null,
    val createdAt: LocalDateTime? = null,
    val updatedAt: LocalDateTime? = null
)

data class CreateInspirationRequest(
    val title: String,
    val content: String,
    val type: InspirationType,
    val mood: String,
    val tags: Set<String> = emptySet(),
    val source: String? = null
)

data class UpdateInspirationRequest(
    val title: String? = null,
    val content: String? = null,
    val type: InspirationType? = null,
    val mood: String? = null,
    val tags: Set<String>? = null,
    val source: String? = null
)
