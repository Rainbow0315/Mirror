import { Router, Request, Response } from 'express'
import { prisma } from '../prisma'
import type { Note, NotePerson, Person } from '@prisma/client'

const router = Router()

// 路径是'/'，但在挂载之后变成/api/notes/
router.get('/', async (_req: Request, res: Response) => {
  try {
    const notes = await prisma.note.findMany({
      include: {
        people: {
          include: {
            person: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    const formatted = notes.map((note: Note & {
      people: (NotePerson & { person: Person })[]
    }) => ({
      id: note.id,
      title: note.title,
      content: note.content,
      tags: note.tags,
      createdAt: note.createdAt,
      people: note.people.map((np: NotePerson & { person: Person }) => np.person.name),
    }))

    res.json(formatted)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: '获取笔记失败' })
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, content, tags, peopleIds, userId } = req.body
    if (!title || !content) {
      return res.status(400).json({ error: '标题和内容是必填项' })
    }
    const note = await prisma.note.create({
      data: {
        title,
        content,
        tags,
        user: { connect: { id: userId } },
        people: {
          create: peopleIds?.map((personId: string) => ({
            person: { connect: { id: personId } },
          })) || [],
        },
      },
    })
    return res.status(201).json(note)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: '创建笔记失败' }) 
  }
})

// 更新笔记
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const { title, content, tags, peopleIds } = req.body

  try {
    // 先更新笔记主体
    const updatedNote = await prisma.note.update({
      where: { id },
      data: {
        title,
        content,
        tags,
      },
    })

    // 处理关联人物（先删再加，简单粗暴）
    await prisma.notePerson.deleteMany({ where: { noteId: id } })
    if (peopleIds && peopleIds.length > 0) {
      const linkData = peopleIds.map((personId: string) => ({
        noteId: id,
        personId,
      }))

      await prisma.notePerson.createMany({ data: linkData })
    }

    res.json(updatedNote)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: '更新笔记失败' })
  }
})

// 删除笔记
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    await prisma.note.delete({ where: { id } })
    res.json({ message: '笔记删除成功' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: '删除笔记失败' })
  }
})

export default router
