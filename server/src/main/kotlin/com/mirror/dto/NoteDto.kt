package com.mirror.dto

import java.time.LocalDateTime

data class NoteDto(
    val id: Long? = null,
    val title: String,
    val content: String,
    val date: String,
    val tags: Set<String> = emptySet(),
    val people: Set<String> = emptySet(),
    val createdAt: LocalDateTime? = null,
    val updatedAt: LocalDateTime? = null
)

data class CreateNoteRequest(
    val title: String,
    val content: String,
    val date: String,
    val tags: Set<String> = emptySet(),
    val people: Set<String> = emptySet()
)

data class UpdateNoteRequest(
    val title: String? = null,
    val content: String? = null,
    val date: String? = null,
    val tags: Set<String>? = null,
    val people: Set<String>? = null
)
