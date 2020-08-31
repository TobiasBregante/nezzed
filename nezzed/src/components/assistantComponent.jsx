import React, { useState, useRef } from 'react';
import {emojis, emojiWriteList} from './emojisComponent';
import arrayListWordsResponse from './responseChatbotComponent';

let arrayMsj = [];
arrayMsj.push({
    name: 'bot',
    type: 'response',
    msj: `Hola! Soy tu asistente virtual, Nyzay. ¿En qué te puedo ayudar? Hoy estoy de humor ${emojis[1]}${emojis[1]}`
});
const Assistant = () => {
    const [displayToggle, setDisplayToggle] = useState('d-none');
    const [openChatbot, setOpenChatbot] = useState('d-block');
    const [listEmojis, setListEmojis] = useState('d-none');
    const [lessBodyChatbot, setLessBodyChatbot] = useState('');
    const [emojiToggle, setEmojiToggle] = useState('insert_emoticon');
    const [msj, setMsj] = useState('');
    const chatbotScroll = useRef(null);
    let msjResponse;
    const handleSubmit = e => {
        e.preventDefault();
        arrayListWordsResponse.forEach((data, u) => {
            data.tags.forEach((obj, x) => {
                if(msj.toLowerCase().search(obj) !== (-1)){
                    let filterVerify = false;
                    const val = data.text.split(' ').map((emojiVerify, z) => {
                        return emojiWriteList.map((emojiWr, i) => {
                            if(emojiVerify === emojiWr){
                                filterVerify = true;
                                return data.text.replace(emojiVerify, emojis[i]);
                            }
                        })
                    })
                    msjResponse = (filterVerify) ? val : data.text;
                }
            })
        })
        arrayMsj.push({
            name: 'Me',
            type: 'remitent',
            msj: msj
        });
        if(msjResponse){
            arrayMsj.push({
                name: 'bot',
                type: 'response',
                msj: msjResponse
            });
        }
        setMsj('');
        setTimeout(() => {
            chatbotScroll.current.scrollTop = chatbotScroll.current.scrollHeight;
        }, 0)
    }
    const handleChangeMsj = e => {
        setMsj(e.target.value)
        msj.split(' ').map(obj => {
            return emojiWriteList.map((objWrite, m) => {
                if(obj === objWrite){
                    return setMsj(msj.replace(obj, emojis[m]))
                }
            })
        })
        
    }
    const handleClickClose = e => {
        setDisplayToggle('d-none');
        setOpenChatbot('d-block')
    }
    const handleClickOpen = e => {
        setDisplayToggle('d-block');
        setOpenChatbot('d-none');
    }
    const handleClickOpenEmoji = e =>{
        if(emojiToggle !== 'close'){
            setEmojiToggle('close');
            setListEmojis('d-block');
            setLessBodyChatbot('body-chat-bot-less');
        }else{
            setEmojiToggle('insert_emoticon');
            setListEmojis('d-none');
            setLessBodyChatbot('');
        }
    }
    const handleSelectEmoji = e => {
        setMsj(`${msj}${e.target.title}`)
    }
    return(
        <>
        <article className={`assistant-help ${openChatbot}`} onClick={handleClickOpen}>
            <p className="text-assistant-help">¿Necesitas ayuda?</p>
            <img src="/img/assistant.png" alt="assistant"/>
        </article>
        <article className={`chat-bot-content ${displayToggle}`}>
            <article className="header-chat-bot">
                <h6><small>Powered by Nezzed</small></h6><input type="button" onClick={handleClickClose} value="x" className="btn btn-danger close-btn" title="Cerrar"/>
            </article>
            <article ref={chatbotScroll} className={`body-chat-bot ${lessBodyChatbot}`}>
                {arrayMsj.map((obj, i) => {
                    let classVerify;
                    if(obj.type === 'remitent'){
                        classVerify = 'content-text-chat-remitent'
                    }else{
                        classVerify = 'content-text-chat-response'
                    }
                    return(
                        <article key={i} className={`${classVerify} col-12 col-sm-12 col-lg-12 col-xl-12`}>
                            <p>
                                {obj.msj}
                            </p>
                        </article>
                    )
                })}
            </article>
            <article className="input-chatbot">
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChangeMsj} value={msj} placeholder="Escriba una consulta"/>
                    <ul className="list-tools-chat-bot">
                        <li><i className="large material-icons">keyboard_voice</i></li>
                        <li onClick={handleClickOpenEmoji}><i className="btn-emoji large material-icons">{emojiToggle}</i></li>
                    </ul>
                </form>
            </article>
            <article className={`content-emojis-chat-bot ${listEmojis}`}>
                <ul>
                    {emojis.map((obj, i) => <li key={i} onClick={handleSelectEmoji} title={obj}>{obj}</li>)}
                </ul>
            </article>
        </article>
        </>
    )
}

export default Assistant;