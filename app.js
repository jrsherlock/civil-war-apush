// ═══════════════════════════════════════════════════════════════════════════
// CIVIL WAR MASTERY - APPLICATION LOGIC
// Study Guide + Gamified Quiz Experience
// ═══════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────────────────────────────────────
let currentPhase = 'causes';
let currentCardIndex = 0;
let filteredStudyData = [];

// Quiz State
let quizIndex = 0;
let quizScore = 0;
let quizXP = 0;
let totalXP = parseInt(localStorage.getItem('civilWarXP') || '0');
let streak = 0;
let hintUsed = false;
let difficulty = 'standard'; // 'standard' or 'hard'
let questionStates = []; // 0 = unanswered, 1 = correct, 2 = wrong
let userAttempts = [];

// ─────────────────────────────────────────────────────────────────────────────
// DOM ELEMENTS (initialized after DOM load)
// ─────────────────────────────────────────────────────────────────────────────
let screens = {};

// ─────────────────────────────────────────────────────────────────────────────
// INITIALIZATION
// ─────────────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Initialize screen references
    screens = {
        landing: document.getElementById('landing-screen'),
        study: document.getElementById('study-screen'),
        'quiz-start': document.getElementById('quiz-start-screen'),
        quiz: document.getElementById('quiz-screen'),
        results: document.getElementById('results-screen')
    };
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Load saved XP
    updateTotalXPDisplay();
    
    // Render initial study cards
    filterStudy('causes');
    
    // Show landing screen
    showScreen('landing');
});

// ─────────────────────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────────────────────
function showScreen(screenName) {
    // Hide all screens
    Object.values(screens).forEach(screen => {
        if (screen) screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = screens[screenName] || document.getElementById(`${screenName}-screen`);
    if (targetScreen) {
        targetScreen.classList.add('active');
        // Scroll to top
        window.scrollTo(0, 0);
    }
    
    // Refresh icons
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 50);
}

// ─────────────────────────────────────────────────────────────────────────────
// STUDY MODE
// ─────────────────────────────────────────────────────────────────────────────
function filterStudy(phase) {
    currentPhase = phase;
    
    // Update tab styles
    document.querySelectorAll('.era-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(`tab-${phase}`).classList.add('active');
    
    // Filter and render cards
    filteredStudyData = studyData.filter(item => item.phase === phase);
    renderStudyCards();
}

function renderStudyCards() {
    const grid = document.getElementById('study-grid');
    grid.innerHTML = '';
    
    filteredStudyData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'study-card';
        card.onclick = () => openCardModal(index);
        
        // Determine tag class
        const tagClass = getTagClass(item.tag);
        
        card.innerHTML = `
            <span class="study-card-tag ${tagClass}">${item.tag}</span>
            <h3 class="study-card-title">${item.title}</h3>
            <p class="study-card-subtitle">${item.subtitle}</p>
            <div class="study-card-cta">
                <span>Study Card</span>
                <i data-lucide="arrow-right"></i>
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    // Refresh icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function getTagClass(tag) {
    const tagLower = tag.toLowerCase();
    if (tagLower.includes('battle') || tagLower.includes('conflict')) return 'tag-battle';
    if (tagLower.includes('legislation') || tagLower.includes('constitution')) return 'tag-legislation';
    if (tagLower.includes('person') || tagLower.includes('politics')) return 'tag-person';
    if (tagLower.includes('event')) return 'tag-event';
    if (tagLower.includes('theme') || tagLower.includes('foreign') || tagLower.includes('diplomacy')) return 'tag-foreign';
    return 'tag-default';
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD MODAL
// ─────────────────────────────────────────────────────────────────────────────
function openCardModal(index) {
    currentCardIndex = index;
    const item = filteredStudyData[index];
    
    // Populate modal
    document.getElementById('card-tag').textContent = item.tag;
    document.getElementById('card-title').textContent = item.title;
    document.getElementById('card-subtitle').textContent = item.subtitle;
    document.getElementById('card-desc').innerHTML = item.desc;
    document.getElementById('card-question').textContent = item.question;
    document.getElementById('card-answer-text').innerHTML = item.answer;
    
    // Reset answer visibility
    document.getElementById('card-answer').classList.add('hidden');
    document.getElementById('reveal-btn').innerHTML = '<i data-lucide="eye"></i> Reveal Key Takeaway';
    
    // Update nav buttons
    document.getElementById('prev-card-btn').disabled = index === 0;
    document.getElementById('next-card-btn').disabled = index === filteredStudyData.length - 1;
    
    // Show modal
    document.getElementById('card-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Refresh icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function closeCardModal() {
    document.getElementById('card-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function revealAnswer() {
    const answerDiv = document.getElementById('card-answer');
    const btn = document.getElementById('reveal-btn');
    
    if (answerDiv.classList.contains('hidden')) {
        answerDiv.classList.remove('hidden');
        btn.innerHTML = '<i data-lucide="eye-off"></i> Hide Answer';
    } else {
        answerDiv.classList.add('hidden');
        btn.innerHTML = '<i data-lucide="eye"></i> Reveal Key Takeaway';
    }
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        openCardModal(currentCardIndex - 1);
    }
}

function nextCard() {
    if (currentCardIndex < filteredStudyData.length - 1) {
        openCardModal(currentCardIndex + 1);
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// QUIZ MODE
// ─────────────────────────────────────────────────────────────────────────────
function setDifficulty(diff) {
    difficulty = diff;
    
    // Update buttons
    document.querySelectorAll('.diff-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`diff-${diff}`).classList.add('active');
    
    // Update description
    const desc = document.getElementById('diff-desc');
    if (diff === 'standard') {
        desc.textContent = 'Multiple attempts allowed. Hints available.';
    } else {
        desc.textContent = 'One chance per question. No hints. Double XP!';
    }
}

function startQuiz() {
    // Reset state
    quizIndex = 0;
    quizScore = 0;
    quizXP = 0;
    streak = 0;
    questionStates = new Array(quizQuestions.length).fill(0);
    userAttempts = quizQuestions.map(() => []);
    
    // Show quiz screen
    showScreen('quiz');
    loadQuestion();
}

function loadQuestion() {
    const q = quizQuestions[quizIndex];
    
    // Update header
    document.getElementById('q-num').textContent = quizIndex + 1;
    document.getElementById('quiz-xp').textContent = quizXP;
    
    // Update progress bar
    const progress = (quizIndex / quizQuestions.length) * 100;
    document.getElementById('quiz-progress').style.width = `${progress}%`;
    
    // Update streak indicator
    const streakIndicator = document.getElementById('streak-indicator');
    if (streak >= 3) {
        streakIndicator.classList.remove('hidden');
        document.getElementById('streak-count').textContent = streak;
    } else {
        streakIndicator.classList.add('hidden');
    }
    
    // Populate question
    document.getElementById('q-tag').textContent = q.tag;
    document.getElementById('q-text').textContent = q.q;
    document.getElementById('hint-text').textContent = q.hint;
    
    // Reset hint
    hintUsed = false;
    document.getElementById('hint-box').classList.add('hidden');
    const hintBtn = document.getElementById('hint-btn');
    hintBtn.disabled = difficulty === 'hard';
    hintBtn.querySelector('span').textContent = difficulty === 'hard' ? 'Hints disabled' : 'Need a Hint? (-2 XP)';
    
    // Render options
    renderOptions(q);
    
    // Refresh icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function renderOptions(q) {
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    const letters = ['A', 'B', 'C', 'D'];
    const attempts = userAttempts[quizIndex];
    const isAnswered = questionStates[quizIndex] !== 0;
    
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        
        // Check if this option was attempted and wrong
        const wasWrongAttempt = attempts.includes(i) && i !== q.correct;
        const isCorrectAnswer = isAnswered && i === q.correct;
        
        if (wasWrongAttempt) {
            btn.classList.add('wrong');
            btn.disabled = true;
        }
        
        if (isCorrectAnswer) {
            btn.classList.add('correct');
        }
        
        if (isAnswered) {
            btn.disabled = true;
        }
        
        // Create marker content
        let markerContent = letters[i];
        if (wasWrongAttempt) {
            markerContent = '<i data-lucide="x"></i>';
        } else if (isCorrectAnswer) {
            markerContent = '<i data-lucide="check"></i>';
        }
        
        btn.innerHTML = `
            <span class="option-marker">${markerContent}</span>
            <span>${opt}</span>
        `;
        
        if (!btn.disabled) {
            btn.onclick = () => handleAnswer(i);
        }
        
        container.appendChild(btn);
    });
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function useHint() {
    if (hintUsed || difficulty === 'hard') return;
    
    hintUsed = true;
    document.getElementById('hint-box').classList.remove('hidden');
    document.getElementById('hint-btn').disabled = true;
}

function handleAnswer(selectedIndex) {
    const q = quizQuestions[quizIndex];
    const isCorrect = selectedIndex === q.correct;
    
    // Record attempt
    userAttempts[quizIndex].push(selectedIndex);
    
    if (isCorrect) {
        // Calculate XP
        let earnedXP = 10;
        
        // First attempt bonus
        if (userAttempts[quizIndex].length === 1) {
            quizScore++;
            earnedXP = 10;
        } else {
            earnedXP = 5; // Reduced XP for multiple attempts
        }
        
        // Hint penalty
        if (hintUsed) {
            earnedXP -= 2;
        }
        
        // Hard mode bonus
        if (difficulty === 'hard') {
            earnedXP *= 2;
        }
        
        // Streak bonus
        if (streak >= 3) {
            earnedXP += Math.min(streak, 10); // Max +10 streak bonus
        }
        
        streak++;
        quizXP += earnedXP;
        questionStates[quizIndex] = 1;
        
        showFeedback(true, q.rationale, earnedXP);
        showXPPopup(`+${earnedXP} XP`);
        
    } else {
        streak = 0;
        
        if (difficulty === 'hard') {
            // Hard mode: one chance only
            questionStates[quizIndex] = 2;
            showFeedback(false, q.rationale, 0);
        } else {
            // Standard mode: can try again
            showFeedback(false, q.rationale, 0, true);
        }
    }
    
    // Re-render options to show state
    renderOptions(q);
}

function showFeedback(isCorrect, rationale, xp, canTryAgain = false) {
    const modal = document.getElementById('feedback-modal');
    const header = document.getElementById('feedback-header');
    const titleText = document.getElementById('feedback-title-text');
    const xpSpan = document.getElementById('feedback-xp');
    const rationaleEl = document.getElementById('feedback-rationale');
    const tryAgainBtn = document.getElementById('try-again-btn');
    const nextBtn = document.getElementById('next-q-btn');
    
    if (isCorrect) {
        header.className = 'feedback-header correct';
        header.querySelector('.feedback-icon').innerHTML = '<i data-lucide="check"></i>';
        titleText.textContent = streak >= 3 ? `${streak} Streak! 🔥` : 'Correct!';
        xpSpan.textContent = `+${xp} XP`;
        xpSpan.style.display = 'block';
        tryAgainBtn.classList.add('hidden');
        nextBtn.style.flex = '1';
    } else {
        header.className = 'feedback-header wrong';
        header.querySelector('.feedback-icon').innerHTML = '<i data-lucide="x"></i>';
        titleText.textContent = 'Incorrect';
        xpSpan.style.display = 'none';
        
        if (canTryAgain) {
            tryAgainBtn.classList.remove('hidden');
            nextBtn.style.flex = '0.5';
        } else {
            tryAgainBtn.classList.add('hidden');
            nextBtn.style.flex = '1';
        }
    }
    
    rationaleEl.textContent = rationale;
    
    // Update next button text for last question
    if (quizIndex === quizQuestions.length - 1) {
        nextBtn.innerHTML = 'See Results <i data-lucide="arrow-right"></i>';
    } else {
        nextBtn.innerHTML = 'Next Question <i data-lucide="arrow-right"></i>';
    }
    
    modal.classList.add('active');
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function tryAgain() {
    document.getElementById('feedback-modal').classList.remove('active');
}

function nextQuestion() {
    document.getElementById('feedback-modal').classList.remove('active');
    
    // If not answered (skipping), mark as wrong
    if (questionStates[quizIndex] === 0) {
        questionStates[quizIndex] = 2;
    }
    
    quizIndex++;
    
    if (quizIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    // Calculate final stats
    const percentage = Math.round((quizScore / quizQuestions.length) * 100);
    
    // Save XP
    totalXP += quizXP;
    localStorage.setItem('civilWarXP', totalXP.toString());
    updateTotalXPDisplay();
    
    // Update results screen
    document.getElementById('final-percent').textContent = percentage;
    document.getElementById('score-breakdown').textContent = `${quizScore}/${quizQuestions.length} Correct`;
    document.getElementById('xp-earned').textContent = quizXP;
    
    // Set icon and message based on score
    const iconContainer = document.getElementById('results-icon');
    const scoreCircle = document.querySelector('.score-circle');
    const message = document.getElementById('results-message');
    
    if (percentage >= 90) {
        iconContainer.className = 'results-icon gold';
        iconContainer.innerHTML = '<i data-lucide="trophy"></i>';
        scoreCircle.className = 'score-circle gold';
        message.textContent = 'Outstanding! You\'re ready for the AP exam!';
    } else if (percentage >= 70) {
        iconContainer.className = 'results-icon silver';
        iconContainer.innerHTML = '<i data-lucide="medal"></i>';
        scoreCircle.className = 'score-circle silver';
        message.textContent = 'Great work! Review a few concepts and you\'ll ace it.';
    } else {
        iconContainer.className = 'results-icon bronze';
        iconContainer.innerHTML = '<i data-lucide="book-open"></i>';
        scoreCircle.className = 'score-circle bronze';
        message.textContent = 'Keep studying! Use the guide to review missed concepts.';
    }
    
    showScreen('results');
}

function reviewAnswers() {
    showScreen('quiz');
    toggleQuizMap();
}

function restartQuiz() {
    startQuiz();
}

// ─────────────────────────────────────────────────────────────────────────────
// QUIZ MAP
// ─────────────────────────────────────────────────────────────────────────────
function toggleQuizMap() {
    const modal = document.getElementById('quiz-map-modal');
    
    if (modal.classList.contains('active')) {
        modal.classList.remove('active');
    } else {
        renderQuizMap();
        modal.classList.add('active');
    }
}

function renderQuizMap() {
    const grid = document.getElementById('quiz-map-grid');
    grid.innerHTML = '';
    
    questionStates.forEach((state, index) => {
        const btn = document.createElement('button');
        btn.className = 'map-q-btn';
        btn.textContent = index + 1;
        
        if (index === quizIndex) {
            btn.classList.add('current');
        } else if (state === 1) {
            btn.classList.add('correct');
        } else if (state === 2) {
            btn.classList.add('wrong');
        } else {
            btn.classList.add('unanswered');
        }
        
        btn.onclick = () => jumpToQuestion(index);
        grid.appendChild(btn);
    });
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function jumpToQuestion(index) {
    quizIndex = index;
    toggleQuizMap();
    loadQuestion();
}

// ─────────────────────────────────────────────────────────────────────────────
// XP SYSTEM
// ─────────────────────────────────────────────────────────────────────────────
function updateTotalXPDisplay() {
    const xpElements = document.querySelectorAll('#total-xp, #landing-xp span:last-child');
    document.getElementById('total-xp').textContent = totalXP;
}

function showXPPopup(text) {
    const popup = document.getElementById('xp-popup');
    document.getElementById('xp-popup-text').textContent = text;
    
    popup.classList.remove('hidden');
    
    // Remove and re-add to restart animation
    popup.style.animation = 'none';
    popup.offsetHeight; // Trigger reflow
    popup.style.animation = 'xpPop 1s ease forwards';
    
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 1000);
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// KEYBOARD SHORTCUTS
// ─────────────────────────────────────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
    // Close modals on Escape
    if (e.key === 'Escape') {
        closeCardModal();
        document.getElementById('quiz-map-modal').classList.remove('active');
    }
    
    // Card modal navigation
    const cardModal = document.getElementById('card-modal');
    if (cardModal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') prevCard();
        if (e.key === 'ArrowRight') nextCard();
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            revealAnswer();
        }
    }
});
