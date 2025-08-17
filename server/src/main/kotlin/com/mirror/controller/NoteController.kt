package com.mirror.controller

import com.mirror.dto.CreateNoteRequest
import com.mirror.dto.NoteDto
import com.mirror.dto.UpdateNoteRequest
import com.mirror.service.NoteService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import jakarta.validation.Valid

@RestController
@RequestMapping("/notes")
@CrossOrigin(origins = ["http://localhost:3000"])
class NoteController(
    private val noteService: NoteService
) {
    
    @GetMapping
    fun getAllNotes(): ResponseEntity<List<NoteDto>> {
        val notes = noteService.getAllNotes()
        return ResponseEntity.ok(notes)
    }
    
    @GetMapping("/{id}")
    fun getNoteById(@PathVariable id: Long): ResponseEntity<NoteDto> {
        val note = noteService.getNoteById(id)
        return ResponseEntity.ok(note)
    }
    
    @GetMapping("/date/{date}")
    fun getNotesByDate(@PathVariable date: String): ResponseEntity<List<NoteDto>> {
        val notes = noteService.getNotesByDate(date)
        return ResponseEntity.ok(notes)
    }
    
    @GetMapping("/search")
    fun searchNotes(@RequestParam keyword: String): ResponseEntity<List<NoteDto>> {
        val notes = noteService.searchNotes(keyword)
        return ResponseEntity.ok(notes)
    }
    
    @GetMapping("/tags")
    fun getNotesByTags(@RequestParam tags: Set<String>): ResponseEntity<List<NoteDto>> {
        val notes = noteService.getNotesByTags(tags)
        return ResponseEntity.ok(notes)
    }
    
    @GetMapping("/people")
    fun getNotesByPeople(@RequestParam people: Set<String>): ResponseEntity<List<NoteDto>> {
        val notes = noteService.getNotesByPeople(people)
        return ResponseEntity.ok(notes)
    }
    
    @GetMapping("/dates")
    fun getAllDates(): ResponseEntity<List<String>> {
        val dates = noteService.getAllDates()
        return ResponseEntity.ok(dates)
    }
    
    @GetMapping("/all-tags")
    fun getAllTags(): ResponseEntity<List<String>> {
        val tags = noteService.getAllTags()
        return ResponseEntity.ok(tags)
    }
    
    @GetMapping("/all-people")
    fun getAllPeople(): ResponseEntity<List<String>> {
        val people = noteService.getAllPeople()
        return ResponseEntity.ok(people)
    }
    
    @PostMapping
    fun createNote(@Valid @RequestBody request: CreateNoteRequest): ResponseEntity<NoteDto> {
        val note = noteService.createNote(request)
        return ResponseEntity.status(HttpStatus.CREATED).body(note)
    }
    
    @PutMapping("/{id}")
    fun updateNote(
        @PathVariable id: Long,
        @Valid @RequestBody request: UpdateNoteRequest
    ): ResponseEntity<NoteDto> {
        val note = noteService.updateNote(id, request)
        return ResponseEntity.ok(note)
    }
    
    @DeleteMapping("/{id}")
    fun deleteNote(@PathVariable id: Long): ResponseEntity<Unit> {
        noteService.deleteNote(id)
        return ResponseEntity.noContent().build()
    }
}
