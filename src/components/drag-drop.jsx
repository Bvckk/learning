import { useEffect } from 'react';

export default function DragDrop() {
    useEffect(() => {
        const draggableElement = document.getElementById('draggable');
        const droppableElement = document.getElementById('droppable');

        if (draggableElement && droppableElement) {
            draggableElement.ondragstart = (e) => {
                e.dataTransfer.setData('text/plain', e.target.id);
            };

            droppableElement.ondragover = (e) => {
                e.preventDefault();
            };

            droppableElement.ondrop = (e) => {
                const id = e.dataTransfer.getData('text');
                const dragged = document.getElementById(id);
                if (dragged) {
                    droppableElement.appendChild(dragged);
                }
                e.dataTransfer.clearData();
            };
        }
    }, []);

    return (
        <div>
            <div id="draggable" draggable="true">Drag me</div>
            <div id="droppable" style={{ minHeight: '50px', border: '1px solid #ccc', marginTop: '10px' }}>Drop here</div>
        </div>
    );
}