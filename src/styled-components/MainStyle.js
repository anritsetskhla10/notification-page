import styled from 'styled-components';

const MainStyle = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;

   

    .notification{
        width: 343px;
        margin: 0 0 10px;
        padding: 16px 26px 16px 16px;
        border-radius: 8px;
        background-color: #f7fafd;
        display: flex;
        flex-direction: row;
        gap: 13px;
        cursor: pointer;
    }

    .seen{
        width: 343px;
        margin: 0 0 10px;
        padding: 16px 26px 16px 16px;
        border-radius: 8px;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        gap: 13px;
        cursor: pointer;
    }

    .img{
        width: 39px;
        height: 39px;
        border-radius: 50%;
        border: solid 1px rgba(0, 0, 0, 0.05);
    }

    .content{
        display: flex;
        flex-direction: column;
    }

    .name{
        font-size: 14px;
        font-weight: 800;
        text-align: left;
        color: #1c202b;
    }

    .action{
        font-weight: 500;
        color: #5e6778;
    }

    .postContent{
        font-weight: bold;
        color: #5e6778;
    }

    .chessClub{
        font-weight: bold;
        color: #0a327b;
    }
    .read{
        display: none;
    }
    .unread{
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-left: 6px;
        background-color: #f65552;
    }

    .time{
        font-size: 14px;
        font-weight: 500;
        text-align: left;
        color: #939cad;
    }

    .msg{
        margin-top: 12px;
        padding: 16px;
        border-radius: 5px;
        border: solid 1px #dde7ee;
        background-color: #fff;
        font-size: 14px;
        font-weight: 500;
        text-align: left;
        color: #5e6778;
    }

    .yourPhoto{
        width: 39px;
        height: 39px;
        border-radius: 7px;
        margin-left:auto;
    }

    @media screen and (min-width:1440px) {
        margin-top: 31px;

    .notification, .seen{
        width: 670px;
        margin: 0 0 8px;
        padding: 18px 32px 17px 20px;
        gap: 19px;
    }

    .img, .yourPhoto{
        width: 45px;
        height: 45px;
    }

    .name, .time , .msg{
        font-size: 16px;
    }


    .msg{
        margin-top: 13px;
        padding: 17px 20px 20px;
    }

    .name2:hover, .postContent:hover {
        cursor: pointer;
        color: #0a327b;
    }

    .msg:hover{
        cursor: pointer;
        background-color: #e5effa;
    }

    }
`;


export {MainStyle};