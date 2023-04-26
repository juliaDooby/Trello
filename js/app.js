* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    overflow: hidden;
}

body {
    background: url("../img/1.jpg") center / cover no-repeat;
    background-size: cover;
}

.app {
    display: flex;
    flex-direction: column;
    padding: 50px 0;
    width: 100vh;
    height: 100vh;

    .boards {
        display: flex;
        width: 100%;

        &__item {
            display: flex;
            flex-direction: column;
            align-self: baseline;
            max-width: 250px;
            width: 100%;
            background-color: rgba(3, 72, 80, 0.7);
            margin: 0 15px;
            padding: 10px;
            transition: 0.3s all ease;
            border-radius: 3px;
        }

        .title {
            padding: 5px;
            color: #f8f4eb;

            &__focus {
                outline: 1px solid rgba(168, 168, 168, 0.45);
            }
        }

        .list {
            min-height: 40px;

            &__item {
                background-color: #f8f4eb;
                border-radius: 3px;
                padding: 10px;
                text-align: center;
                margin: 4px 0;
                cursor: pointer;
                font-weight: 400px;
                font-size: 14px;
                outline: none;
                border: none;
            }
        }

        .form {
            border-radius: 3px;
            margin-top: auto;
            // скрытие формы
            display: none;

            .textarea {
                resize: none;
                height: 60px;
                border-radius: 3px;
                border: none;
                background: #f8f4eb;
                padding: 10px;
                width: 100%;

                &:focus {
                    outline: none;
                }
            }

            .buttons {
                display: flex;

                .add__item-btn {
                    // background: rgb(241, 199, 167);
                    background-color: rgba(55, 162, 156);
                    border: none;
                    height: 35px;
                    cursor: pointer;
                    color: #f8f4eb;
                    border-radius: 3px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 10px;
                    width: 100%;
                }

                .cancel__item-btn {
                    padding: 0 10px;
                    // background: rgb(232, 163, 109);
                    background: rgb(222, 148, 85);
                    border: none;
                    height: 35px;
                    cursor: pointer;
                    color: #f8f4eb;
                    border-radius: 3px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 75px;
                    margin-left: auto;
                    flex-shrink: 0;
                }
            }
        }

        .add__btn {
            height: 30px;
            background: rgba(155, 155, 155, 0.3);
            border-radius: 3px;
            margin-top: 5px;
            display: flex;
            font-size: 12px;
            align-items: center;
            padding-left: 10px;
            color: #f8f4eb;
            cursor: pointer;

            span {
                font-size: 20px;
                margin-right: 10px;
                color: #f8f4eb;
            }
        }
    }

    .button {
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(2, 102, 82, 0.72);
        border: none;
        width: 150px;
        cursor: pointer;
        position: absolute;
        bottom: 50px;
        left: 50%;
        // выравнивание
        transform: translate(-50%);
        color: #f8f4eb;
        border-radius: 3px;
        font-size: 14px;
    }
}
