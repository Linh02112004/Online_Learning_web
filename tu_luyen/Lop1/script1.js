const questions = [
            {
                image: 'De/Câu1.jpg',
                answers: ['Đáp án A', 'Đáp án B', 'Đáp án C'],
                correctAnswer: 2
            },
            {
                image: 'De/Câu2.jpg',
                answers: ['Đáp án A', 'Đáp án B', 'Đáp án C'],
                correctAnswer: 1
            },
            {
                image: 'De/Câu3.jpg',
                answers: ['Đáp án A', 'Đáp án B', 'Đáp án C'],
                correctAnswer: 2
            },
            {
                image: 'De/Câu4.jpg',
                answers: ['Đáp án A', 'Đáp án B', 'Đáp án C'],
                correctAnswer: 0
            },
            {
                image: 'De/Câu5.jpg',
                answers: ['Đáp án A', 'Đáp án B', 'Đáp án C'],
                correctAnswer: 1
            },
            {
                image: 'De/Câu6.jpg',
                answers: ['Đáp án A', 'Đáp án B', 'Đáp án C'],
                correctAnswer: 1
            },
            {
                image: 'De/Câu7.jpg',
                answers: ['Đáp án A', 'Đáp án B', 'Đáp án C'],
                correctAnswer: 0
            },
            {
                image: 'De/Câu8.jpg',
                answers: ['Đáp án A', 'Đáp án B', 'Đáp án C', 'Đáp án D'],
                correctAnswer: 1
            },
            {
                image: 'De/Câu9.jpg',
                answers: ['Đáp án A', 'Đáp án B', 'Đáp án C', 'Đáp án D'],
                correctAnswer: 0
            },
            {
                image: 'De/Câu10.jpg',
                answers: ['Đáp án A', 'Đáp án B', 'Đáp án C'],
                correctAnswer: 1
            },
        ];

        let selectedAnswers = new Array(questions.length).fill(null);
        let score = 0;

        function displayQuestions() {
            const questionsContainer = document.getElementById('questions');
            questionsContainer.innerHTML = '';

            questions.forEach((question, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.classList.add('question');

                const questionImage = document.createElement('img');
                questionImage.src = question.image;
                questionDiv.appendChild(questionImage);

                const answersDiv = document.createElement('div');
                answersDiv.classList.add('answers');

                question.answers.forEach((answer, answerIndex) => {
                    const answerButton = document.createElement('button');
                    answerButton.textContent = answer;
                    answerButton.addEventListener('click', () => {
                        selectedAnswers[index] = answerIndex;
                        document.querySelectorAll(`#question-${index} button`).forEach(btn => btn.classList.remove('selected'));
                        answerButton.classList.add('selected');
                    });
                    if (selectedAnswers[index] === answerIndex) {
                        answerButton.classList.add('selected');
                    }
                    answersDiv.appendChild(answerButton);
                });

                questionDiv.appendChild(answersDiv);
                questionDiv.id = 'question-${index}';
                questionsContainer.appendChild(questionDiv);
            });
        }

        function openConfirmModal() {
            document.getElementById('modalText').textContent = 'Bạn có chắc chắn nộp bài không?';
            document.getElementById('confirmYes').style.display = 'inline-block';
            document.getElementById('confirmNo').style.display = 'inline-block';
            document.getElementById('confirmModal').style.display = 'block';
            
            const closeButton = document.getElementById('closeButton');
            if (closeButton) {
                closeButton.style.display = 'none';
            }
        }

        function closeConfirmModal() {
            document.getElementById('confirmModal').style.display = 'none';
        }

        document.getElementById('submit').addEventListener('click', openConfirmModal);

        document.getElementById('confirmYes').addEventListener('click', () => {
            closeConfirmModal();
            checkAnswers();
        });

        document.getElementById('confirmNo').addEventListener('click', closeConfirmModal);

        function checkAnswers() {
            score = 0;
            selectedAnswers.forEach((answer, index) => {
                if (answer === questions[index].correctAnswer) {
                    score++;
                }
            });
            showResultModal();
        }

        function showResultModal() {
            document.getElementById('modalText').textContent = 'Bạn đã trả lời đúng ' + score + '/10 câu.';
            document.getElementById('confirmYes').style.display = 'none';
            document.getElementById('confirmNo').style.display = 'none';

            // Kiểm tra nếu nút "Đóng" chưa tồn tại, thì thêm vào
            let closeButton = document.getElementById('closeButton');
            if (!closeButton) {
                closeButton = document.createElement('button');
                closeButton.id = 'closeButton';
                closeButton.textContent = 'Đóng';
                closeButton.addEventListener('click', closeConfirmModal);
                document.querySelector('.modal-content').appendChild(closeButton);
            }
            closeButton.style.display = 'inline-block';

            document.getElementById('confirmModal').style.display = 'block';
        }

        document.getElementById('reset').addEventListener('click', () => {
            selectedAnswers = new Array(questions.length).fill(null);
            score = 0;
            document.getElementById('result').textContent = '';
            displayQuestions();
        });

        displayQuestions();