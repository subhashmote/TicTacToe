import React, { useRef, useState } from 'react'
import circle_icon from '../assets/circle.png'
import cross_icon from '../assets/cross.png'

let data = ["","","","","","","","",""];

function TicTacToe() {

    let [count,setCount] = useState(0);
    let [lock,setLock] = useState(false);
    let titleRef = useRef(null);

    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];


    const toggle = (e,num) => {
        if(lock){
            return 0;
        }

        if(count%2==0){
            e.target.innerHTML = `<img src='${cross_icon}'>`;
            data[num]="X";
            setCount(++count);
        }
        else{
            e.target.innerHTML = `<img src='${circle_icon}'>`;
            data[num]="O";
            setCount(++count);
        }
        checkwin();
    }

    const checkwin = () => {
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            won(data[2]);
        }else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            won(data[5]);
        }else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            won(data[8]);
        }else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            won(data[8]);
        }else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            won(data[6]);
        }else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            won(data[6]);
        }else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            won(data[7]);
        }else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            won(data[8]);
        }
    }

    const won = (winner) => {
        setLock(true);
        if(winner === "X"){
            titleRef.current.innerHTML = `<h1>Congratulations: <span style="color: #26ffcb;">X</span> Wins</h1>`
        }
        else{
            titleRef.current.innerHTML = `<h1>Congratulations: <span style="color: #26ffcb;">O</span> Wins</h1>`
        }
    }


    const resetHandler = () => {
        setLock(false);
        data = ["","","","","","","","",""];
        titleRef.current.innerHTML = `<h1>TicTacToe Game In <span className='text-[#26ffcb]' >React</h1>`
        box_array.map((e)=>{
            e.current.innerHTML = "";
        })
    }

  return (
    <div className='flex flex-col items-center justify-evenly h-screen'>
        {/* Heading  */}
        <h1 ref={titleRef} className='mt-10 text-white font-semibold text-xl'>TicTacToe Game In <span className='text-[#26ffcb]' >React</span></h1>

         {/* Board  */}
        <div className='board flex flex-col gap-2'>
            <div className='row1 flex gap-2'>
                <div className='boxes h-[60px] w-[60px] flex justify-center items-center bg-[#1f3540] border-none rounded-md cursor-pointer p-4' onClick={(e) => {toggle(e,0)}}  ref={box1}></div>
                <div className='boxes h-[60px] w-[60px] flex justify-center items-center bg-[#1f3540] border-none rounded-md cursor-pointer p-4' onClick={(e) => {toggle(e,1)}} ref={box2}></div>
                <div className='boxes h-[60px] w-[60px] flex justify-center items-center bg-[#1f3540] border-none rounded-md cursor-pointer p-4' onClick={(e) => {toggle(e,2)}} ref={box3}></div>
            </div>

            <div className='row2 flex gap-2'>
                <div className='boxes h-[60px] w-[60px] flex justify-center items-center bg-[#1f3540] border-none rounded-md cursor-pointer p-4' onClick={(e) => {toggle(e,3)}} ref={box4}></div>
                <div className='boxes h-[60px] w-[60px] flex justify-center items-center bg-[#1f3540] border-none rounded-md cursor-pointer p-4' onClick={(e) => {toggle(e,4)}} ref={box5}></div>
                <div className='boxes h-[60px] w-[60px] flex justify-center items-center bg-[#1f3540] border-none rounded-md cursor-pointer p-4' onClick={(e) => {toggle(e,5)}} ref={box6}></div>
            </div>

            <div className='row3 flex gap-2'>
                <div className='boxes h-[60px] w-[60px] flex justify-center items-center bg-[#1f3540] border-none rounded-md cursor-pointer p-4' onClick={(e) => {toggle(e,6)}} ref={box7}></div>
                <div className='boxes h-[60px] w-[60px] flex justify-center items-center bg-[#1f3540] border-none rounded-md cursor-pointer p-4' onClick={(e) => {toggle(e,7)}} ref={box8}></div>
                <div className='boxes h-[60px] w-[60px] flex justify-center items-center bg-[#1f3540] border-none rounded-md cursor-pointer p-4' onClick={(e) => {toggle(e,8)}} ref={box9}></div>
            </div>
        </div>


        {/* Reset Button  */}
        <button className='reset px-4 py-1 border-none bg-[#1f3540] rounded-full text-[#26ffcb]' onClick={resetHandler}>Reset</button>
    </div>
  )
}

export default TicTacToe