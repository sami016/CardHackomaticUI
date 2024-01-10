import React, { useCallback } from "react";
import { ICardVersion } from '../models/ICardVersion';
import './Card.scss';
import ContentEditable from "react-contenteditable";
import { useDropzone } from 'react-dropzone';

export interface ICardEditor {
    setTitle(title: string): void;
    setImage(image: string): void;
    setDescription(description: string): void;
}

export const Card = (props: { cardVersion: ICardVersion, cardEditor: ICardEditor, editMode?: boolean }) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            props.cardEditor.setImage(reader.result as string);
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
    }, [props.cardEditor])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/*": [".png", ".gif", ".jpeg", ".jpg"],
        },
    })

    return <div className="card">
        <ContentEditable
            className="title text-center"
            html={props.cardVersion.definition.title} // innerHTML of the editable div
            disabled={false}       // use true to disable editing
            onChange={e => props.cardEditor.setTitle(e.target.value)} // handle innerHTML change
            tagName='p'
        />
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <img className="image" src={props.cardVersion.definition.image}></img>
        </div>
        <ContentEditable
            className="description"
            html={props.cardVersion.definition.description} // innerHTML of the editable div
            disabled={false}       // use true to disable editing
            onChange={e => props.cardEditor.setDescription(e.target.value)} // handle innerHTML change
            tagName='p'
        />
    </div>;
}