package com.mirror.service

import com.mirror.dto.CreateNoteRequest
import com.mirror.dto.NoteDto
import com.mirror.dto.UpdateNoteRequest
import com.mirror.entity.Note
import com.mirror.repository.NoteRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional
class NoteService(
    private val noteRepository: NoteRepository
) {
    
    fun getAllNotes(): List<NoteDto> {
        return noteRepository.findByOrderByCreatedAtDesc()
            .map { it.toDto() }
    }
    
    fun getNoteById(id: Long): NoteDto {
        val note = noteRepository.findById(id)
            .orElseThrow { IllegalArgumentException("Note not found with id: $id") }
        return note.toDto()
    }
    
    fun getNotesByDate(date: String): List<NoteDto> {
        return noteRepository.findByDate(date)
            .map { it.toDto() }
    }
    
    fun searchNotes(keyword: String): List<NoteDto> {
        return noteRepository.findByKeyword(keyword)
            .map { it.toDto() }
    }
    
    fun getNotesByTags(tags: Set<String>): List<NoteDto> {
        return noteRepository.findByTags(tags)
            .map { it.toDto() }
    }
    
    fun getNotesByPeople(people: Set<String>): List<NoteDto> {
        return noteRepository.findByPeople(people)
            .map { it.toDto() }
    }
    
    fun getAllDates(): List<String> {
        return noteRepository.findAllDates()
    }
    
    fun getAllTags(): List<String> {
        return noteRepository.findAllTags()
    }
    
    fun getAllPeople(): List<String> {
        return noteRepository.findAllPeople()
    }
    
    fun createNote(request: CreateNoteRequest): NoteDto {
        val note = Note(
            title = request.title,
            content = request.content,
            date = request.date,
            tags = request.tags.toMutableSet(),
            people = request.people.toMutableSet()
        )
        
        val savedNote = noteRepository.save(note)
        return savedNote.toDto()
    }
    
    fun updateNote(id: Long, request: UpdateNoteRequest): NoteDto {
        val note = noteRepository.findById(id)
            .orElseThrow { IllegalArgumentException("Note not found with id: $id") }
        
        request.title?.let { note.title = it }
        request.content?.let { note.content = it }
        request.date?.let { note.date = it }
        request.tags?.let { note.tags = it.toMutableSet() }
        request.people?.let { note.people = it.toMutableSet() }
        
        val updatedNote = noteRepository.save(note)
        return updatedNote.toDto()
    }
    
    fun deleteNote(id: Long) {
        if (!noteRepository.existsById(id)) {
            throw IllegalArgumentException("Note not found with id: $id")
        }
        noteRepository.deleteById(id)
    }
    
    private fun Note.toDto(): NoteDto {
        return NoteDto(
            id = this.id,
            title = this.title,
            content = this.content,
            date = this.date,
            tags = this.tags,
            people = this.people,
            createdAt = this.createdAt,
            updatedAt = this.updatedAt
        )
    }
}
