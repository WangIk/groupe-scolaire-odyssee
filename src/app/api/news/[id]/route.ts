import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';

// PUT - Mettre à jour une actualité
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { id } = params;

    const newsRef = doc(db, 'news', id);
    const updateData = {
      title: body.title,
      content: body.content,
      image: body.image,
      author: body.author,
      category: body.category,
      isPublished: body.isPublished,
      updatedAt: new Date()
    };

    await updateDoc(newsRef, updateData);

    return NextResponse.json({
      id,
      ...updateData
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'actualité:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour de l\'actualité' },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer une actualité
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const newsRef = doc(db, 'news', id);
    await deleteDoc(newsRef);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'actualité:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression de l\'actualité' },
      { status: 500 }
    );
  }
} 