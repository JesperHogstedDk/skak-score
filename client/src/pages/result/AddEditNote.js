import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import RenderData from "../../modules/RenderData";
import Form from '../../modules/Form';
import useFetch, { getUrl } from "../../modules/useFetch";
import { isNullOrUndefined } from "../../modules/strings";

const AddEditNote = () => {
  const { noteId } = useParams();
  console.log('AddEditNote: noteId=' + noteId);
  console.log('AddEditNote: isNullOrUndefined(noteId)=' + isNullOrUndefined(noteId));
  const { note = {
    title: '',
    content: '',
    lang: '',
    isLive: false,
    category: '',
    author: '',
  } } = useFetch('note/' + noteId, isNullOrUndefined(noteId));
  const navigate = useNavigate();

  return (
    <div>
      <RenderData
        data={note}
      />
      <Form
        entity={note}
        onSubmitHandler={async newNote => {
          console.log('AddEditNote: newNote:' + { newNote })
          const response = await fetch(getUrl('note'), {
            method: isNullOrUndefined(newNote.id) ? 'POST' : 'PUT',
            body: JSON.stringify(newNote),
            headers: {
              'Content-Type': 'application/json'
            }
          });

          console.log('AddEditNote: - fetch: ' + response.status + ' ' + response.statusText);
          
          if (response.ok) {
            await response.json()
            navigate('/note-list')
          }
        }}
        onDeleteHandler={async (id) => {
          if (!isNullOrUndefined(id)) {
            await fetch(getUrl('note'), {
              method: 'DELETE',
              body: JSON.stringify({ id }),
              headers: {
                'Content-Type': 'application/json'
              }
            });

            navigate('/note-list')
          }
        }}
      />
    </div>
  );
};

export default AddEditNote;