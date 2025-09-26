import {useEffect} from 'react'
export default function Canvas() {
    useEffect(() => {
        const canvas = document.getElementById('myCanvas');
        // 2d - 2d
        // webgl - 3d
        const ctx = canvas.getContext('2d');
        // ve mau
        ctx.fillStyle = 'green';
        // 10 - cach left
        // 0 - cach up
        // 60 - x
        // 80 - y
        ctx.fillRect(10, 0, 60, 80);
        
    }, [])
    return (
        <div>
            <canvas id="myCanvas" width={200} height={100}></canvas>
        </div>

    )
    
}