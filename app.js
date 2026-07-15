// Firebase imports removed. Using global 'firebase' object from Compat SDK.

const PRIVACY_POLICY_CONTENT = `디지털과 교실사이, 사이버 어울림 역량을 기르는 AI 마음 온(ON) 및 본 서비스에 연결딘 개별 하위 웹 애블리케이션(이하 통칭하여 ‘본 서비스’)은(는) 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
본 서비스는 안산능길초등학교 소속 교사가 직접 개발하여 교육활동에 활용하는 소프트웨어들로 구성되어 있습니다.

제1조 (개인정보의 처리 목적)
본 서비스는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
1. 학생 회원 가입 및 관리: 학교 및 학급 구성원 식별, 학생 본인 확인
2. 학습 지원 및 서비스 제공: 학습 진도율 확인, 과제 제출 및 학습 결과물(제출한 답변 등) 기록 저장, 학습 이력 관리

제2조 (개인정보의 처리 및 보유기간)
① 본 서비스는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
1. 보유 기간: 수집된 학생 및 회원의 개인정보는 해당 학년도 종료 시(익년 2월 말) 또는 학생의 졸업/진급 시까지 보유합니다.
2. 파기 시점: 보유 기간 종료 후 지체 없이(5일 이내) 복구 불가능한 방법으로 파기합니다.
3. 로컬 데이터: 브라우저 내에 저장된 임시 데이터(LocalStorage)는 이용자가 브라우저 캐시 및 쿠키를 삭제하는 즉시 완전히 파기됩니다

제3조 (처리하는 개인정보 항목)
본 서비스는 학습 활동 지원을 위해 필요한 최소한의 개인정보만을 수집합니다.
1. 일부 하위 웹앱 회원가입 및 서비스 이용 시 수집 항목:
• 필수 항목: 이메일(e-mail) 주소, 이름, 학교, 학번(또는 학년, 반, 번호), 아이디, 비밀번호, 학습 결과물(제출한 코드, 과제 기록, 학습 수행 데이터 등)
2. 서비스 이용 과정에서 자동 생성되어 수집될 수 있는 항목:
• 접속 IP 정보, 쿠키, 서비스 이용 기록, 접속 로그 등
3. 수집하지 않는 항목: 주민등록번호, 주소, 전화번호 등 교육 활동에 불필요한 민감 정보 및 식별 정보 일체.
4. 관리자 페이지 자동 생성 정보:
• 관리자가 "이 기기에서 비밀번호 저장 (Save password)"을 선택할 경우, 해당 브라우저의 \`localStorage\`에 비밀번호 및 상태 관련 토큰이 저장될 수 있습니다.

제4조 (만 14세 미만 아동의 개인정보 처리에 관한 사항)
① 본 서비스는 만 14세 미만 아동의 개인정보를 처리하기 위하여 회원가입 단계 또는 학기 초 학교 가정통신문(개인정보 수집·이용 동의서)을 통하여 법정대리인의 동의를 받습니다.
② 법정대리인이 동의하지 않는 경우, 해당 아동은 서비스 회원가입 및 일부 기능 이용이 제한될 수 있습니다.

제5조 (개인정보의 파기 절차 및 방법)
① 본 서비스는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
② 파기 방법: 전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수 없도록 파기(DB 영구 삭제)하며, 종이 문서는 분쇄하거나 소각하여 파기합니다.
③ 이용자 기기에 남아 있는 로컬 데이터는 브라우저 설정에서 쿠키 및 사이트 데이터를 삭제를 통해 즉시 영구 삭제할 수 있습니다.

제6조 (개인정보의 안전성 확보조치)
본 서비스는 개인정보 보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
1. 비밀번호 암호화: 이용자의 비밀번호는 일방향 암호화(Hash) 되어 저장 및 관리되며, 개발자(관리자)도 알 수 없도록 안전하게 보호됩니다.
2. 웹 호스팅 및 DB 보안: 보안 인증을 획득한 전문 클라우드 플랫폼(Firebase 등)을 기반으로 운영되며, 전 구간 HTTPS 보안 통신을 적용하여 데이터를 암호화하여 전송합니다.
3. 개인정보 취급 직원의 최소화: 데이터베이스 관리 및 개인정보를 처리하는 담당자를 개발 교사(이태환) 1인으로 지정하여 접근 권한을 엄격히 제한합니다.

제7조 (정보주체와 법정대리인의 권리·의무 및 행사방법)
① 정보주체(학생) 및 법정대리인은 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
② 권리 행사는 각 개별 웹앱 내 [회원탈퇴] 기능 또는 개발 교사에게 구두나 이메일/서면으로 요청하시면 지체 없이 조치하겠습니다.
③ 이용자는 브라우저 설정을 통해 쿠키 및 로컬스토리지 저장 기능을 제어할 수 있습니다.

제8조 (개인정보 보호책임자)
본 서비스는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
• 성명: 이태환 (개발자)
• 소속: 안산능길초등학교
• 직위: 교사
• 연락처: 031-493-8093

제9조 (개인정보의 제3자 제공)
본 서비스는 이용자의 개인정보를 제1조에서 명시한 목적 범위 내에서만 처리하며, 이용자의 동의 없이 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.
• 이용자가 사전에 동의한 경우
• 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우

제10조 (개인정보 처리의 위탁)
① 본 서비스는 원활한 서비스 운영을 위하여 아래와 같이 개인정보 처리 업무를 외부에 위탁하고 있습니다.
수탁업체: Google (Firebase)LLC 
위탁 업무 내용: 회원 데이터베이스 저장 및 관리, 인증 처리,실시간 데이터 저장 및 동기화
보유 및 이용 기간:위탁 계약 종료 시 또는 개인정보 보유기간 종료 시까지

② 본 서비스는 위탁업체(Firebase)에 데이터 저장 인프라만을 위탁하며, 개인정보의 열람·수정·삭제 등 실질적인 관리 권한은 개인정보 보호책임자(이태환 교사)가 직접 행사합니다.
③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체 없이 본 개인정보 처리방침을 통하여 공개합니다.

제11조 (개인정보 처리방침 변경)
이 개인정보 처리방침은 2026년 7월 9일부터 적용됩니다.`;


// ==========================================
// [파이어베이스 Config] 
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyD0MWdkXCdH0yfdjQxDYw08Zx3kOWoFe7Q",
  authDomain: "cybertest-b2d53.firebaseapp.com",
  projectId: "cybertest-b2d53",
  storageBucket: "cybertest-b2d53.firebasestorage.app",
  messagingSenderId: "969068841275",
  appId: "1:969068841275:web:04f7786f2dd40251f8cf1e"
};

let db;
let auth;
let useFirebase = false;

if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
  try {
    const app = firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    auth = firebase.auth();
    useFirebase = true;
    console.log("Firebase initialized.");
  } catch (e) {
    console.error("Firebase 초기화 에러:", e);
  }
}

// ==========================================
// [전역 상태 변수 및 데이터 정의]
// ==========================================
window.appState = {
  classCode: "",
  studentId: "",
  studentName: "",
  isClassMode: false,
  isMember: false,
  currentSceneIndex: 0,
  surveyIndex: 0,
  surveyScores: {
    "사이버 공감": 0, "사이버 의사소통": 0, "사이버 자기조절": 0, "사이버 감정조절": 0,
    "인터넷 윤리의식 및 활용": 0, "사이버 갈등관리 및 문제해결": 0, "사이버 폭력인식 및 대처": 0, "사이버 자기존중감": 0
  },
  completedTasks: [], // 완료한 카테고리명 배열
  recommendedRoute: [], // 추천 루트
  taskAnswers: {} // 각 과제별 주관식 답변 저장
};

const questions = [
  { id: 1, category: "사이버 공감", text: "나는 가끔 친구의 입장에서 친구가 어떻게 느끼고 있을지 생각하며 친구를 더 잘 이해하려고 노력한다.", isReverse: false },
  { id: 2, category: "사이버 공감", text: "나는 불행한 사람들을 보면 불쌍하다고 느낀다.", isReverse: false },
  { id: 3, category: "사이버 의사소통", text: "나는 내 생각을 말로 잘 표현할 수 있다.", isReverse: false },
  { id: 4, category: "사이버 의사소통", text: "나는 친구와 이야기 할 때, 이야기에 집중한다.", isReverse: false },
  { id: 5, category: "사이버 자기조절", text: "나는 나만의 인터넷(스마트폰) 사용 규칙이 있다.", isReverse: false },
  { id: 6, category: "사이버 자기조절", text: "나는 사이버 상에서 스스로 행동을 관리할 수 있다.", isReverse: false },
  { id: 7, category: "사이버 감정조절", text: "나는 내가 느끼는 감정을 말할 수 있다. (예: 기분 나쁘다, 기분 좋다, 화났다, 부끄럽다 등)", isReverse: false },
  { id: 8, category: "사이버 감정조절", text: "나는 화가 날 때, 화가 난 감정을 해결하는 나만의 방법이 있다.", isReverse: false },
  { id: 9, category: "인터넷 윤리의식 및 활용", text: "나는 사이버 상에서 근거 없는 정보를 구별한다.", isReverse: false },
  { id: 10, category: "인터넷 윤리의식 및 활용", text: "나는 개인정보가 중요하다고 생각한다.", isReverse: false },
  { id: 11, category: "사이버 갈등관리 및 문제해결", text: "나와 친구의 생각이 다를 때, 서로의 생각에 대해 솔직하게 이야기 한다.", isReverse: false },
  { id: 12, category: "사이버 갈등관리 및 문제해결", text: "나와 친구 사이에 문제가 생기면, 문제의 원인이 무엇인지 생각해본다.", isReverse: false },
  { id: 13, category: "사이버 폭력인식 및 대처", text: "학교에서 같은 반 친구가 놀림을 당하면, 나는 그 아이 편이 되어 도와줄 것이다.", isReverse: false },
  { id: 14, category: "사이버 폭력인식 및 대처", text: "나는 사이버 폭력 발생 시 신고하는 곳을 알고 있다.", isReverse: false },
  { id: 15, category: "사이버 자기존중감", text: "나는 나 자신에 대해 만족한다.", isReverse: false },
  { id: 16, category: "사이버 자기존중감", text: "나는 내 자신을 소중하게 생각한다.", isReverse: false }
];

// 마인드 웹 노드 정보 (위치 x, y 비율)
const mapNodes = [
  { id: "node-1", category: "사이버 공감", x: 50, y: 16 },              // 12시 방향
  { id: "node-2", category: "사이버 의사소통", x: 74, y: 24 },            // 1시 반 방향
  { id: "node-3", category: "사이버 감정조절", x: 84, y: 50 },            // 3시 방향 (우측 외곽)
  { id: "node-4", category: "사이버 갈등관리 및 문제해결", x: 74, y: 76 },  // 4시 반 방향
  { id: "node-5", category: "사이버 폭력인식 및 대처", x: 50, y: 84 },      // 6시 방향
  { id: "node-6", category: "인터넷 윤리의식 및 활용", x: 26, y: 76 },      // 7시 반 방향
  { id: "node-7", category: "사이버 자기조절", x: 16, y: 50 },            // 9시 방향 (좌측 외곽)
  { id: "node-8", category: "사이버 자기존중감", x: 26, y: 24 }             // 10시 반 방향
];

// 노드 연결선 엣지 (인덱스 기준)
const mapEdges = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0]
];

// 임시 어드민 확인용
let mockStudents = [];

// ==========================================
// [로컬 스토리지 연동 헬퍼]
// ==========================================
function saveLocalState() {
  if (!window.appState.isMember && !window.appState.isClassMode) {
    // 비회원이면 로컬 스토리지에 데이터를 저장하지 않고 스킵
    return;
  }
  const key = `mindweb_${window.appState.classCode}_${window.appState.studentId}`;
  localStorage.setItem(key, JSON.stringify(window.appState));

  if (useFirebase) {
    const docId = `${window.appState.classCode}_${window.appState.studentId}`;
    db.collection("students").doc(docId).set({
      appState: {
        surveyScores: window.appState.surveyScores,
        completedTasks: window.appState.completedTasks,
        recommendedRoute: window.appState.recommendedRoute,
        currentSceneIndex: window.appState.currentSceneIndex,
        surveyIndex: window.appState.surveyIndex,
        taskAnswers: window.appState.taskAnswers || {}
      },
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true }).catch(err => {
      console.error("Firestore 저장 에러:", err);
    });
  }
}

function loadLocalState() {
  if (!window.appState.isMember && !window.appState.isClassMode) {
    // 비회원이면 불러오지 않고 스킵
    return false;
  }
  const key = `mindweb_${window.appState.classCode}_${window.appState.studentId}`;
  const saved = localStorage.getItem(key);
  if (saved) {
    const data = JSON.parse(saved);
    window.appState.surveyScores = data.surveyScores || window.appState.surveyScores;
    window.appState.completedTasks = data.completedTasks || [];
    window.appState.recommendedRoute = data.recommendedRoute || [];
    window.appState.taskAnswers = data.taskAnswers || {};
    return true; // 기존 데이터 있음
  }
  return false;
}

// ==========================================
// [배경음악(BGM) 제어 모듈]
// ==========================================
let introBGM = null;

window.playIntroBGM = function() {
  try {
    const isMuted = localStorage.getItem('app_audio_muted') === 'true';
    if (!isMuted) {
      if (!introBGM) {
        introBGM = new Audio('sound/introbgm.mp3');
        introBGM.loop = true;
        introBGM.volume = 0.5; // 일반 소리 대비 50% 수준 작게
      }
      introBGM.play().catch(err => console.warn("introbgm autoplay blocked:", err));
    }
  } catch (e) {
    console.warn("introbgm play failed:", e);
  }
};

window.stopIntroBGM = function() {
  try {
    if (introBGM) {
      introBGM.pause();
      introBGM.currentTime = 0;
      introBGM = null;
    }
  } catch (e) {
    console.warn("introbgm stop failed:", e);
  }
};

// ==========================================
// [화면 전환 공통 함수]
// ==========================================
window.switchView = function(viewId) {
  // 로그인 뷰 이외의 메인/관리자 화면으로 넘어가면 배경음 차단
  if (viewId !== 'view-login') {
    window.stopIntroBGM();
  }

  document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');

  // 각 활동 전환 시 필요한 초기화 로직 실행
  if (typeof act2_init === 'function' && viewId === 'view-comm-act2') {
    act2_init();
  } else if (typeof act3_start === 'function' && viewId === 'view-comm-act3') {
    act3_start();
  } else if (typeof act4_init === 'function' && viewId === 'view-comm-act4') {
    act4_init();
  }
}

// ==========================================
// [로그인 및 모드 선택 로직]
// ==========================================
// ==========================================
// [로그인 및 모드 선택 로직]
// ==========================================
window.selectLoginMode = function(mode) {
  // 모든 폼 우선 숨김
  document.getElementById('login-mode-select').style.display = 'none';
  document.getElementById('class-mode-form').style.display = 'none';
  document.getElementById('member-login-form').style.display = 'none';
  document.getElementById('member-signup-form').style.display = 'none';

  if (mode === 'class') {
    document.getElementById('class-mode-form').style.display = 'flex';
  } else if (mode === 'member') {
    document.getElementById('member-login-form').style.display = 'flex';
  } else if (mode === 'nonmember') {
    // 비회원 모드 즉시 진입
    window.appState.isClassMode = false;
    window.appState.isMember = false;
    
    // 임의의 Guest 계정 정보로 로그인 연동
    const classCode = "nonmember_mode";
    const studentId = "Guest_" + Math.floor(1000 + Math.random() * 9000);
    window.performSync(classCode, studentId);
  }
}

window.backToModeSelect = function() {
  document.getElementById('login-mode-select').style.display = 'flex';
  document.getElementById('class-mode-form').style.display = 'none';
  document.getElementById('member-login-form').style.display = 'none';
  document.getElementById('member-signup-form').style.display = 'none';
}

window.logout = function() {
  // 전역 상태 초기화
  window.appState = {
    classCode: "",
    studentId: "",
    studentName: "",
    isClassMode: false,
    isMember: false,
    currentSceneIndex: 0,
    surveyIndex: 0,
    surveyScores: {
      "사이버 공감": 0, "사이버 의사소통": 0, "사이버 자기조절": 0, "사이버 감정조절": 0,
      "인터넷 윤리의식 및 활용": 0, "사이버 갈등관리 및 문제해결": 0, "사이버 폭력인식 및 대처": 0, "사이버 자기존중감": 0
    },
    completedTasks: [],
    recommendedRoute: [],
    taskAnswers: {}
  };

  // 자동 로그인용 세션 제거
  localStorage.removeItem('last_sync_session');

  // 화면 전환 및 폼 초기화
  switchView('view-login');
  document.getElementById('login-mode-select').style.display = 'flex';
  document.getElementById('class-mode-form').style.display = 'none';
  document.getElementById('member-login-form').style.display = 'none';
  document.getElementById('member-signup-form').style.display = 'none';

  // 파이어베이스 로그아웃 연동
  if (useFirebase && auth) {
    auth.signOut().catch(e => console.error("Firebase 로그아웃 에러:", e));
  }
}

window.enterClassMode = async function() {
  const classCode = document.getElementById('class-code-input').value.trim();
  const studentId = document.getElementById('student-name-input').value.trim();

  if (classCode === "adminmode") {
    // 숨겨진 관리자 모드 실행
    window.appState.isClassMode = true;
    window.appState.isMember = false;
    document.getElementById('admin-code-modal').style.display = 'flex';
    renderCreatedCodesList();
    return;
  }

  if (!classCode || !studentId) {
    alert("학급 코드와 이름(번호)을 모두 입력해주세요!");
    return;
  }

  // 영문 소문자와 숫자 조합 정규식 유효성 검사
  const codeRegex = /^[a-z0-9]+$/;
  if (!codeRegex.test(classCode)) {
    alert("학급 코드는 소문자와 숫자만 입력해 주세요.");
    return;
  }

  // 🔒 학급 코드 유효성 검증
  if (useFirebase) {
    try {
      const classDoc = await db.collection("classes").doc(classCode).get();
      if (!classDoc.exists) {
        alert("존재하지 않는 학급 코드입니다. 교사 대시보드에서 생성된 정확한 코드를 입력해 주세요.");
        return;
      }
    } catch (err) {
      console.error("학급 코드 확인 오류:", err);
      alert("학급 코드를 확인하는 중 문제가 발생했습니다. 네트워크 환경을 확인해 주세요.");
      return;
    }
  } else {
    // 로컬 모드인 경우
    const createdCodes = JSON.parse(localStorage.getItem('created_class_codes') || '[]');
    if (!createdCodes.includes(classCode)) {
      alert("등록되지 않은 학급 코드입니다. (관리자 모드 'adminmode'에서 코드를 먼저 생성해 주세요.)");
      return;
    }
  }

  window.appState.isClassMode = true;
  window.appState.isMember = false;
  window.performSync(classCode, studentId);
}

// 회원가입 관련 상태 변수
let generatedVerificationCode = "";
let isEmailVerified = false;

window.toggleSignupRoleFields = function(role) {
  const fields = document.getElementById('student-specific-fields');
  const consentArea = document.getElementById('student-age-consent-area');
  const ageCheckbox = document.getElementById('signup-age-consent');
  
  if (role === 'teacher') {
    fields.style.display = 'none';
    if (consentArea) consentArea.style.display = 'none';
    if (ageCheckbox) {
      ageCheckbox.checked = false;
      window.toggleAgeConsent(false);
    }
  } else {
    fields.style.display = 'flex';
    if (consentArea) consentArea.style.display = 'flex';
  }
}

window.toggleAgeConsent = function(checked) {
  const emailInput = document.getElementById('signup-email');
  if (!emailInput) return;
  if (checked) {
    emailInput.placeholder = "법정대리인(보호자) 이메일 주소";
  } else {
    emailInput.placeholder = "이메일 주소";
  }
}


window.showSignupForm = function() {
  document.getElementById('member-login-form').style.display = 'none';
  document.getElementById('member-signup-form').style.display = 'flex';
  
  // 교사 선택 기본값으로 복구
  const teacherRadio = document.querySelector('input[name="signup-role"][value="teacher"]');
  if (teacherRadio) teacherRadio.checked = true;
  window.toggleSignupRoleFields('teacher');
}

window.cancelSignup = function() {
  document.getElementById('member-signup-form').style.display = 'none';
  document.getElementById('member-login-form').style.display = 'flex';
}

// 회원가입 전송
window.submitSignup = async function() {
  const role = document.querySelector('input[name="signup-role"]:checked').value;
  const id = document.getElementById('signup-id').value.trim();
  const pw = document.getElementById('signup-pw').value.trim();
  const school = document.getElementById('signup-school').value.trim();
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const ageCheckbox = document.getElementById('signup-age-consent');
  const isUnder14 = (role === 'student' && ageCheckbox && ageCheckbox.checked);

  // 학생 가입 시 필요한 추가 정보
  let grade = "";
  let sClass = "";
  let number = "";

  if (role === 'student') {
    grade = document.getElementById('signup-grade').value.trim();
    sClass = document.getElementById('signup-class').value.trim();
    number = document.getElementById('signup-number').value.trim();
    
    if (!id || !pw || !school || !name || !grade || !sClass || !number || !email) {
      alert("모든 빈칸을 채워주세요!");
      return;
    }
  } else {
    if (!id || !pw || !school || !name || !email) {
      alert("모든 빈칸을 채워주세요!");
      return;
    }
  }

  if (useFirebase) {
    try {
      // 1. Firestore에서 기존 아이디 중복 확인
      const doc = await db.collection("users").doc(id).get();
      if (doc.exists) {
        alert("이미 존재하는 아이디입니다!");
        return;
      }
      
      // 2. 파이어베이스 Auth로 계정 생성
      const cred = await auth.createUserWithEmailAndPassword(email, pw);
      
      // 3. 이메일 인증 메일 발송
      await cred.user.sendEmailVerification();
      
      // 4. Firestore에 상세 사용자 프로필 저장
      const userData = {
        uid: cred.user.uid,
        id: id,
        email: email,
        school: school,
        name: name,
        role: role, // 'teacher' or 'student'
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        authProvider: 'email'
      };

      if (role === 'student') {
        userData.grade = parseInt(grade);
        userData.class = parseInt(sClass);
        userData.number = parseInt(number);
        userData.isUnder14 = isUnder14;
      }

      await db.collection("users").doc(id).set(userData);
      
      let alertMsg = "";
      if (role === 'student' && isUnder14) {
        alertMsg = "회원가입 요청이 완료되었습니다!\n\n입력하신 법정대리인(보호자) 이메일 주소로 동의 인증 메일이 발송되었습니다. 보호자분의 메일함에서 링크를 클릭하여 인증을 마친 뒤 로그인해 주세요.";
      } else {
        alertMsg = "회원가입 요청이 완료되었습니다!\n\n입력하신 이메일 주소로 인증 메일이 발송되었습니다. 메일함에서 링크를 클릭하여 인증을 마친 뒤 로그인해 주세요.";
      }
      alert(alertMsg);
      
      document.getElementById('member-signup-form').style.display = 'none';
      document.getElementById('member-login-form').style.display = 'flex';
    } catch (err) {
      console.error("회원가입 에러:", err);
      alert("회원가입 중 오류가 발생했습니다: " + err.message);
    }
  } else {
    // 로컬 스토리지 폴백 모드 (교사 권한도 가상 지원)
    let users = JSON.parse(localStorage.getItem('registered_users') || '[]');
    if (users.some(u => u.id === id)) {
      alert("이미 존재하는 아이디입니다!");
      return;
    }

    const userData = { id, pw, school, name, email, role };
    if (role === 'student') {
      userData.grade = grade;
      userData.class = sClass;
      userData.number = number;
      userData.isUnder14 = isUnder14;
    }

    users.push(userData);
    localStorage.setItem('registered_users', JSON.stringify(users));

    let alertMsg = "";
    if (role === 'student' && isUnder14) {
      alertMsg = "회원가입이 완료되었습니다!\n방금 입력하신 법정대리인(보호자) 이메일 정보와 가입 정보로 로그인해주세요. (로컬모드)";
    } else {
      alertMsg = "회원가입이 완료되었습니다!\n방금 가입하신 정보로 로그인해주세요. (로컬모드)";
    }
    alert(alertMsg);
    
    document.getElementById('member-signup-form').style.display = 'none';
    document.getElementById('member-login-form').style.display = 'flex';
  }
}

// 회원 로그인 전송
window.submitMemberLogin = async function() {
  const id = document.getElementById('member-id-input').value.trim();
  const pw = document.getElementById('member-pw-input').value.trim();

  if (!id || !pw) {
    alert("아이디와 비밀번호를 입력해주세요!");
    return;
  }

  const selectedRole = document.querySelector('input[name="login-role"]:checked').value;

  if (useFirebase) {
    try {
      // 1. Firestore에서 id 매핑 문서 조회
      const doc = await db.collection("users").doc(id).get();
      if (!doc.exists) {
        alert("아이디 또는 비밀번호가 틀렸습니다!");
        return;
      }
      
      const userData = doc.data();
      if (userData.role !== selectedRole) {
        alert(`로그인 유형이 올바르지 않습니다!\n선택하신 유형(${selectedRole === 'teacher' ? '교사' : '학생'})과 가입 정보가 일치하지 않습니다.`);
        return;
      }

      const email = userData.email;
      // 2. 파이어베이스 Auth 로그인
      await auth.signInWithEmailAndPassword(email, pw);
      
      // 3. 이메일 인증 여부 검사 (교사/학생 공통)
      const user = auth.currentUser;
      if (user && !user.emailVerified) {
        alert("이메일 인증이 아직 완료되지 않았습니다!\n\n이메일 수신함을 확인해 인증 링크를 클릭하신 뒤 다시 로그인해 주세요.");
        await auth.signOut();
        return;
      }
      
      if (userData.role === 'teacher') {
        window.appState.isClassMode = false;
        window.appState.isMember = true;
        window.appState.studentName = userData.name || id;
        
        switchView('view-admin');
        await loadTeacherClasses(auth.currentUser.uid);
      } else {
        window.appState.isClassMode = false;
        window.appState.isMember = true;
        window.appState.studentName = userData.name || id;
        await window.performSync("member_mode", id);
      }
    } catch (err) {
      console.error("로그인 에러:", err);
      alert("로그인에 실패했습니다: " + err.message);
    }
  } else {
    // 로컬 스토리지 폴백 모드
    let users = JSON.parse(localStorage.getItem('registered_users') || '[]');
    const user = users.find(u => u.id === id && u.pw === pw);

    if (user) {
      if (user.role !== selectedRole) {
        alert(`로그인 유형이 올바르지 않습니다!\n선택하신 유형(${selectedRole === 'teacher' ? '교사' : '학생'})과 가입 정보가 일치하지 않습니다.`);
        return;
      }

      window.appState.isClassMode = false;
      window.appState.isMember = true;
      window.appState.studentName = user.name || id;
      
      if (user.role === 'teacher') {
        switchView('view-admin');
      } else {
        window.performSync("member_mode", id);
      }
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다!");
    }
  }
}

// 구글 소셜 로그인
window.loginWithGoogle = async function() {
  if (!useFirebase) {
    alert("Firebase가 설정되지 않았습니다. 로컬 모드에서는 지원하지 않습니다.");
    return;
  }
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    const user = result.user;
    
    // Firestore에서 uid와 일치하는 사용자 문서 조회
    const doc = await db.collection("users").doc(user.uid).get();
    if (doc.exists) {
      const userData = doc.data();
      
      if (userData.role === 'teacher') {
        // 교사 권한이 구글 계정으로 있으면 교사 대시보드로 이동
        window.appState.isClassMode = false;
        window.appState.isMember = true;
        window.appState.studentName = userData.name || user.displayName || "";
        
        switchView('view-admin');
        await loadTeacherClasses(user.uid);
      } else {
        window.appState.isClassMode = false;
        window.appState.isMember = true;
        window.appState.studentName = userData.name || user.displayName || "";
        
        await window.performSync("member_mode", user.uid);
      }
    } else {
      // 최초 구글 로그인 시도 -> 추가 정보 모달 노출 (구글은 무조건 학생으로 유도)
      document.getElementById('google-signup-name').value = user.displayName || "";
      document.getElementById('google-extra-modal').style.display = 'flex';
      window.tempGoogleUser = user;
    }
  } catch (err) {
    console.error("Google 로그인 에러:", err);
    alert("Google 로그인에 실패했습니다: " + err.message);
  }
}

window.cancelGoogleSignup = function() {
  document.getElementById('google-extra-modal').style.display = 'none';
  window.tempGoogleUser = null;
}

window.submitGoogleExtraInfo = async function() {
  const user = window.tempGoogleUser;
  if (!user) {
    alert("구글 인증 정보가 유실되었습니다. 다시 시도해 주세요.");
    return;
  }
  
  const school = document.getElementById('google-signup-school').value.trim();
  const name = document.getElementById('google-signup-name').value.trim();
  const grade = document.getElementById('google-signup-grade').value.trim();
  const sClass = document.getElementById('google-signup-class').value.trim();
  const number = document.getElementById('google-signup-number').value.trim();
  
  if (!school || !name || !grade || !sClass || !number) {
    alert("모든 빈칸을 채워주세요!");
    return;
  }
  
  try {
    await db.collection("users").doc(user.uid).set({
      uid: user.uid,
      id: user.uid,
      email: user.email,
      school: school,
      name: name,
      grade: parseInt(grade),
      class: parseInt(sClass),
      number: parseInt(number),
      role: 'student', // 구글 가입자는 항상 학생으로 고정
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      authProvider: 'google'
    });
    
    document.getElementById('google-extra-modal').style.display = 'none';
    window.appState.isClassMode = false;
    window.appState.isMember = true;
    window.appState.studentName = name;
    
    alert("구글 간편가입 및 정보 등록이 완료되었습니다!");
    await window.performSync("member_mode", user.uid);
  } catch (err) {
    console.error("구글 추가 정보 저장 에러:", err);
    alert("저장 중 오류가 발생했습니다: " + err.message);
  }
}

// ==========================================
// [교사용 대시보드 추가 연동 로직]
// ==========================================

window.createClassByTeacher = async function() {
  if (!useFirebase) {
    alert("Firebase가 연결되어 있지 않습니다. 로컬 모드에서는 생성할 수 없습니다.");
    return;
  }
  
  const className = document.getElementById('new-class-name').value.trim();
  if (!className) {
    alert("학급명(예: 6학년1반)을 입력해주세요!");
    return;
  }

  try {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      alert("로그인 세션이 만료되었습니다. 다시 로그인해 주세요.");
      return;
    }

    // 6자리 학급 난수 코드 생성
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }

    // Firestore classes 컬렉션에 클래스 등록
    await db.collection("classes").doc(code).set({
      classCode: code,
      className: className,
      teacherUid: currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    alert(`[${className}] 학급이 성공적으로 개설되었습니다!\n\n학급 코드: ${code}\n\n학생들에게 이 코드를 나눠주세요!`);
    document.getElementById('new-class-name').value = '';
    
    // 학급 목록 새로고침
    await loadTeacherClasses(currentUser.uid);
  } catch (err) {
    console.error("학급 생성 에러:", err);
    alert("학급 생성에 실패했습니다: " + err.message);
  }
}

window.deleteClassByTeacher = async function() {
  if (!useFirebase) {
    alert("Firebase가 연결되어 있지 않습니다. 로컬 모드에서는 삭제할 수 없습니다.");
    return;
  }

  const select = document.getElementById('teacher-class-select');
  const classCode = select.value;

  if (!classCode) {
    alert("삭제할 학급을 선택해주세요!");
    return;
  }

  const selectedOptionText = select.options[select.selectedIndex].text;

  const confirmFirst = confirm(`정말 [${selectedOptionText}] 학급을 삭제하시겠습니까?\n\n※ 학급 삭제 시 해당 학급에 속한 학생들의 모니터링 데이터(답변 등)도 함께 삭제되며, 이 작업은 되돌릴 수 없습니다.`);
  if (!confirmFirst) return;

  const confirmSecond = confirm("진짜로 삭제하시겠습니까?\n학급 코드 및 모든 학생 정보가 완전히 지워집니다.");
  if (!confirmSecond) return;

  try {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      alert("로그인 세션이 만료되었습니다. 다시 로그인해 주세요.");
      return;
    }

    // 1. classes 컬렉션에서 학급 제거
    await db.collection("classes").doc(classCode).delete();

    // 2. students 컬렉션에서 해당 학급의 모든 학생 제거
    const studentSnapshot = await db.collection("students").where("classCode", "==", classCode).get();
    if (!studentSnapshot.empty) {
      const batch = db.batch();
      studentSnapshot.forEach(doc => {
        batch.delete(doc.ref);
      });
      await batch.commit();
    }

    alert("학급 및 소속 학생 데이터가 성공적으로 삭제되었습니다.");
    
    // 3. UI 및 상태 초기화
    select.value = "";
    window.selectMonitorClass(""); // 모니터링 화면 초기화
    await loadTeacherClasses(currentUser.uid); // 목록 다시 로드
  } catch (err) {
    console.error("학급 삭제 에러:", err);
    alert("학급 삭제에 실패했습니다: " + err.message);
  }
}

window.deleteStudentByTeacher = async function(docId, studentName) {
  if (!useFirebase) {
    alert("Firebase가 연결되어 있지 않습니다. 로컬 모드에서는 삭제할 수 없습니다.");
    return;
  }

  if (!docId) {
    alert("학생 정보를 찾을 수 없습니다.");
    return;
  }

  const confirmDelete = confirm(`정말 [${studentName}] 학생을 삭제하시겠습니까?\n\n※ 해당 학생의 진행 정보 및 과제 데이터가 모두 삭제되며 복구할 수 없습니다.`);
  if (!confirmDelete) return;

  try {
    // students 컬렉션에서 해당 학생 문서 삭제
    await db.collection("students").doc(docId).delete();
    alert(`[${studentName}] 학생 데이터가 삭제되었습니다.`);
    // 실시간 리스너가 작동 중이므로 목록은 자동으로 갱신됩니다.
  } catch (err) {
    console.error("학생 삭제 에러:", err);
    alert("학생 삭제에 실패했습니다: " + err.message);
  }
}

async function loadTeacherClasses(teacherUid) {
  const select = document.getElementById('teacher-class-select');
  select.innerHTML = '<option value="">학급을 선택하세요...</option>';

  if (!useFirebase) return;

  try {
    const snapshot = await db.collection("classes").where("teacherUid", "==", teacherUid).get();
    if (snapshot.empty) {
      return;
    }
    snapshot.forEach(doc => {
      const data = doc.data();
      const option = document.createElement('option');
      option.value = data.classCode;
      option.innerText = `${data.className} (${data.classCode})`;
      select.appendChild(option);
    });
  } catch (err) {
    console.error("학급 목록 로딩 오류:", err);
  }
}

let activeClassListener = null;

window.monitoredStudentsData = {};

window.selectMonitorClass = function(classCode) {
  const tbody = document.getElementById('student-list');
  const classInfo = document.getElementById('monitored-class-info');
  tbody.innerHTML = '';

  if (activeClassListener) {
    activeClassListener(); // 이전 실시간 구독 종료
    activeClassListener = null;
  }

  if (!classCode) {
    tbody.innerHTML = '<tr><td colspan="3" style="color:#aaa; padding: 20px;">학급을 선택하면 실시간으로 학생 현황이 표시됩니다.</td></tr>';
    classInfo.innerText = '';
    return;
  }

  classInfo.innerText = classCode === 'all' ? '전체 학급 모니터링 중' : `현재 모니터링 학급 코드: ${classCode}`;
  tbody.innerHTML = '<tr><td colspan="3" style="color:#aaa; padding: 20px;">실시간 데이터를 불러오는 중...</td></tr>';

  if (!useFirebase) {
    tbody.innerHTML = '<tr><td colspan="3" style="color:#aaa; padding: 20px;">Firebase 로컬 모드에서는 지원하지 않는 기능입니다.</td></tr>';
    return;
  }

  try {
    let query = db.collection("students");
    if (classCode !== 'all') {
      query = query.where("classCode", "==", classCode);
    }

    activeClassListener = query.onSnapshot(snapshot => {
      tbody.innerHTML = '';
      window.monitoredStudentsData = {}; // 모니터링 데이터 캐시 초기화
      
      if (snapshot.empty) {
        tbody.innerHTML = '<tr><td colspan="3" style="color:#aaa; padding: 20px;">아직 조건에 맞는 학생이 없습니다.</td></tr>';
        return;
      }

      // 1. 스냅샷의 문서들을 정렬 가능한 배열로 변환
      const studentsList = [];
      snapshot.forEach(doc => {
        studentsList.push({
          id: doc.id,
          data: doc.data()
        });
      });

      // 2. 입력(제출/업데이트)한 순서대로 정렬 (오름차순)
      // 업데이트가 없는 학생(진행 전)은 맨 아래로 보냄
      studentsList.sort((a, b) => {
        const timeA = a.data.lastUpdated ? a.data.lastUpdated.toDate().getTime() : 0;
        const timeB = b.data.lastUpdated ? b.data.lastUpdated.toDate().getTime() : 0;
        
        if (timeA === 0 && timeB === 0) {
          const nameA = a.data.studentId || "";
          const nameB = b.data.studentId || "";
          return nameA.localeCompare(nameB);
        }
        if (timeA === 0) return 1;
        if (timeB === 0) return -1;
        
        return timeA - timeB; // 오름차순: 먼저 제출한 학생이 맨 위부터 정렬됨
      });

      // 3. 정렬된 순서대로 화면에 렌더링
      studentsList.forEach(student => {
        const data = student.data;
        const docId = student.id;
        window.monitoredStudentsData[docId] = data; // 캐시에 학생 데이터 등록
        
        const tr = document.createElement('tr');
        const studentName = data.studentId || "-";
        const stage = data.stage || "-";
        const scanResult = data.scanResult || "대기중";
        
        let taskBadges = "-";
        if (data.appState && data.appState.completedTasks) {
          const completed = data.appState.completedTasks;
          taskBadges = completed.map(t => {
            const isPromise = t === "사이버 어울림 약속";
            const color = isPromise ? "#9b59b6" : "#2ed573";
            const icon = isPromise ? "🤝" : "🌟";
            return `<span onclick="showStudentDetailAnswers('${docId}', '${t}')" style="background: ${color}; color: #fff; padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; margin: 2px; display: inline-block; cursor: pointer; transition: opacity 0.2s;" onmouseover="this.style.opacity=0.8" onmouseout="this.style.opacity=1" title="클릭하여 답변 보기">${t} ${icon}</span>`;
          }).join(' ') || '<span style="color:#aaa;">진행 전 ❄️</span>';
        }

        let timeStr = "-";
        if (data.lastUpdated) {
          const date = data.lastUpdated.toDate();
          timeStr = date.toLocaleTimeString();
        }

        tr.innerHTML = `
          <td style="padding: 10px; border-bottom: 1px solid #444;">
            ${studentName}<br>
            <div style="display: flex; gap: 5px; justify-content: center; margin-top: 5px;">
              <button class="retro-btn" onclick="showStudentDetailAnswers('${docId}')" style="padding: 3px 6px; font-size: 0.75rem; background-color: #a8ffda; color: #000; box-shadow: 2px 2px 0 #000; cursor: pointer;">답변 보기</button>
              <button class="retro-btn" onclick="deleteStudentByTeacher('${docId}', '${studentName}')" style="padding: 3px 6px; font-size: 0.75rem; background-color: #ff5252; color: #fff; box-shadow: 2px 2px 0 #000; cursor: pointer;">삭제 🗑️</button>
            </div>
          </td>
          <td style="padding: 10px; border-bottom: 1px solid #444; text-align: left;">${taskBadges}</td>
          <td style="padding: 10px; border-bottom: 1px solid #444; font-size: 0.85rem; color: #aaa;">${timeStr}</td>
        `;
        tbody.appendChild(tr);
      });
    }, error => {
      console.error("실시간 모니터링 구독 에러:", error);
      tbody.innerHTML = '<tr><td colspan="3" style="color:#ff5252; padding: 20px;">데이터 수신 중 에러가 발생했습니다. (보안 규칙 등을 확인하세요)</td></tr>';
    });
  } catch (err) {
    console.error("리스너 설정 에러:", err);
  }
}

// 교사용 학생 답변 상세조회 모달 열기/닫기 정의
window.showStudentDetailAnswers = function(docId, targetTask) {
  const data = window.monitoredStudentsData[docId];
  if (!data) {
    alert("학생 데이터를 찾을 수 없습니다.");
    return;
  }
  
  const name = data.studentId || "알 수 없음";
  const stage = data.stage || "-";
  let lastUpdatedStr = "-";
  if (data.lastUpdated) {
    const date = data.lastUpdated.toDate();
    lastUpdatedStr = date.toLocaleTimeString();
  }
  
  const appState = data.appState || {};
  const completedTasks = appState.completedTasks || [];
  const answers = appState.taskAnswers || {};
  
  const content = document.getElementById("detail-modal-content");
  content.innerHTML = "";
  
  if (targetTask) {
    // 특정 과제 답변만 필터링하여 보여줌
    document.getElementById("detail-modal-title").innerText = `📄 [${name}] 학생의 '${targetTask}' 답변`;
    document.getElementById("detail-modal-subtitle").innerText = `현재 단계: ${stage} | 최근 업데이트: ${lastUpdatedStr}`;
    
    const taskCard = document.createElement("div");
    taskCard.style.border = "2px solid #444";
    taskCard.style.background = "#222";
    taskCard.style.padding = "12px";
    taskCard.style.boxShadow = "4px 4px 0 #000";
    
    let taskContentHtml = `<span style="color: var(--point-yellow); font-weight: bold; font-size: 1rem; display: block; border-bottom: 1px solid #444; padding-bottom: 4px; margin-bottom: 8px;">🌟 ${targetTask} (완료)</span>`;
    
    const taskAns = answers[targetTask];
    if (taskAns && typeof taskAns === 'object' && Object.keys(taskAns).length > 0) {
      for (const [qText, aText] of Object.entries(taskAns)) {
        const qMap = {
          // 사이버 갈등관리 및 문제해결
          "game_chat": "활동 1 - 온라인 게임 갈등 상황 답변",
          "project_conflict": "활동 1 - 모둠 협업 문서 갈등 상황 답변",
          "scenario_reply_target_oo": "활동 2 - 동윤의 'ㅇㅇ' 단답 교정",
          "scenario_reply_target1": "활동 2 - 동윤의 'ㄴㄴ 귀찮' 대답 교정",
          "scenario_night_target1": "활동 2 - 준서의 늦은 시간 수학 숙제 질문 교정",
          "scenario_night_target2": "활동 2 - 지호의 짜증나는 밤 대답 교정",
          "갈등 원인 분석": "최종 정리 - 갈등의 진짜 원인 분석",
          "갈등 태도 조율": "최종 정리 - 갈등을 대하는 평화 태도",
          "실천 서약 약속": "최종 정리 - 나만의 평화 다짐 약속",
          "갈등관리 평화 약속": "최종 정리 - 갈등관리 평화 약속",

          // 사이버 의사소통
          "위로 대화 메시지": "사이버 의사소통 - 위로 대화 메시지",

          // 사이버 공감
          "성찰 일기": "사이버 공감 - 나의 감정 성찰 일기",

          // 사이버 폭력인식 및 대처
          "사이버 폭력 예방 처방전": "사이버 폭력대처 - 예방 처방전",
          "대응 대화 메시지": "사이버 폭력대처 - 긴급 신고 접수",

          // 사이버 감정조절
          "나 전달법 - 사실": "사이버 감정조절 - 나 전달법 사실 쓰기",
          "나 전달법 - 감정": "사이버 감정조절 - 나 전달법 감정 쓰기",
          "나 전달법 - 부탁": "사이버 감정조절 - 나 전달법 부탁 쓰기",

          // 사이버 자기존중감
          "질문 1 (지은 분석)": "사이버 자기존중감 - 지은이 상황 분석",
          "질문 2 (행복 내용)": "사이버 자기존중감 - 나의 행복한 대화",
          "질문 2 (해시태그)": "사이버 자기존중감 - 행복 해시태그",
          "질문 2 (스티커 이름)": "사이버 자기존중감 - 선택한 마음 스티커",
          "친구 칭찬 댓글": "사이버 자기존중감 - 친구 칭찬 댓글",

          // 인터넷 윤리의식 및 활용
          "가짜뉴스 대응 메시지": "인터넷 윤리의식 - 가짜뉴스 대응 메시지",
          "나만의 선플 약속": "인터넷 윤리의식 - 나만의 선플 약속"
        };
        const friendlyQText = qMap[qText] || qText;
        taskContentHtml += `
          <div style="margin-bottom: 8px;">
            <span style="color: #a8ffda; font-weight: bold; font-size: 0.85rem; display: block; margin-bottom: 2px;">💬 ${friendlyQText}</span>
            <span style="font-size: 0.95rem; word-break: break-all; color: #fff; background: #000; padding: 6px 10px; display: block; border: 1px solid #333; line-height: 1.45;">${aText}</span>
          </div>
        `;
      }
    } else {
      taskContentHtml += `
        <div style="color: #aaa; font-size: 0.85rem; padding: 4px 0;">
          (이 과제는 객관식 선택 및 시뮬레이션 실천형 과제로, 별도의 주관식 답변 저장이 필요 없는 과제입니다.)
        </div>
      `;
    }
    
    taskCard.innerHTML = taskContentHtml;
    content.appendChild(taskCard);
  } else {
    // 기존 전체 보기 동작
    document.getElementById("detail-modal-title").innerText = `📄 [${name}] 학생의 전체 활동 답변`;
    document.getElementById("detail-modal-subtitle").innerText = `현재 단계: ${stage} | 최근 업데이트: ${lastUpdatedStr}`;
    
    if (completedTasks.length === 0) {
      content.innerHTML = `<div style="color: #aaa; text-align: center; padding: 20px; font-size: 0.95rem;">아직 완료한 사이버 어울림 활동이 없습니다.</div>`;
    } else {
      completedTasks.forEach(task => {
        const taskCard = document.createElement("div");
        taskCard.style.border = "2px solid #444";
        taskCard.style.background = "#222";
        taskCard.style.padding = "12px";
        taskCard.style.marginBottom = "12px";
        taskCard.style.boxShadow = "4px 4px 0 #000";
        
        let taskContentHtml = `<span style="color: var(--point-yellow); font-weight: bold; font-size: 1rem; display: block; border-bottom: 1px solid #444; padding-bottom: 4px; margin-bottom: 8px;">🌟 ${task}</span>`;
        
        const taskAns = answers[task];
        if (taskAns && typeof taskAns === 'object' && Object.keys(taskAns).length > 0) {
          for (const [qText, aText] of Object.entries(taskAns)) {
            const qMap = {
              // 사이버 갈등관리 및 문제해결
              "game_chat": "활동 1 - 온라인 게임 갈등 상황 답변",
              "project_conflict": "활동 1 - 모둠 협업 문서 갈등 상황 답변",
              "scenario_reply_target_oo": "활동 2 - 동윤의 'ㅇㅇ' 단답 교정",
              "scenario_reply_target1": "활동 2 - 동윤의 'ㄴㄴ 귀찮' 대답 교정",
              "scenario_night_target1": "활동 2 - 준서의 늦은 시간 수학 숙제 질문 교정",
              "scenario_night_target2": "활동 2 - 지호의 짜증나는 밤 대답 교정",
              "갈등 원인 분석": "최종 정리 - 갈등의 진짜 원인 분석",
              "갈등 태도 조율": "최종 정리 - 갈등을 대하는 평화 태도",
              "실천 서약 약속": "최종 정리 - 나만의 평화 다짐 약속",
              "갈등관리 평화 약속": "최종 정리 - 갈등관리 평화 약속",

              // 사이버 의사소통
              "위로 대화 메시지": "사이버 의사소통 - 위로 대화 메시지",

              // 사이버 공감
              "성찰 일기": "사이버 공감 - 나의 감정 성찰 일기",

              // 사이버 폭력인식 및 대처
              "사이버 폭력 예방 처방전": "사이버 폭력대처 - 예방 처방전",
              "대응 대화 메시지": "사이버 폭력대처 - 긴급 신고 접수",

              // 사이버 감정조절
              "나 전달법 - 사실": "사이버 감정조절 - 나 전달법 사실 쓰기",
              "나 전달법 - 감정": "사이버 감정조절 - 나 전달법 감정 쓰기",
              "나 전달법 - 부탁": "사이버 감정조절 - 나 전달법 부탁 쓰기",

              // 사이버 자기존중감
              "질문 1 (지은 분석)": "사이버 자기존중감 - 지은이 상황 분석",
              "질문 2 (행복 내용)": "사이버 자기존중감 - 나의 행복한 대화",
              "질문 2 (해시태그)": "사이버 자기존중감 - 행복 해시태그",
              "질문 2 (스티커 이름)": "사이버 자기존중감 - 선택한 마음 스티커",
              "친구 칭찬 댓글": "사이버 자기존중감 - 친구 칭찬 댓글",

              // 인터넷 윤리의식 및 활용
              "가짜뉴스 대응 메시지": "인터넷 윤리의식 - 가짜뉴스 대응 메시지",
              "나만의 선플 약속": "인터넷 윤리의식 - 나만의 선플 약속"
            };
            const friendlyQText = qMap[qText] || qText;
            taskContentHtml += `
              <div style="margin-bottom: 8px;">
                <span style="color: #a8ffda; font-weight: bold; font-size: 0.85rem; display: block; margin-bottom: 2px;">💬 ${friendlyQText}</span>
                <span style="font-size: 0.95rem; word-break: break-all; color: #fff; background: #000; padding: 6px 10px; display: block; border: 1px solid #333; line-height: 1.45;">${aText}</span>
              </div>
            `;
          }
        } else {
          taskContentHtml += `
            <div style="color: #aaa; font-size: 0.85rem; padding: 4px 0;">
              (이 과제는 객관식 선택 및 시뮬레이션 실천형 과제로, 별도의 주관식 답변 저장이 필요 없는 과제입니다.)
            </div>
          `;
        }
        
        taskCard.innerHTML = taskContentHtml;
        content.appendChild(taskCard);
      });
    }
  }
  
  document.getElementById("teacher-detail-modal").style.display = "flex";
};

window.closeTeacherDetailModal = function() {
  document.getElementById("teacher-detail-modal").style.display = "none";
};

// 공통 로그인 세션 연결 프로세스
window.performSync = async function(classCode, studentId) {
  window.appState.classCode = classCode;
  window.appState.studentId = studentId;

  // 세션 정보 기록 (자동 로그인용)
  localStorage.setItem('last_sync_session', JSON.stringify({ classCode, studentId, isClassMode: window.appState.isClassMode }));

  // 로컬 스토리지에서 이전 진행 내역 확인
  let hasHistory = loadLocalState();
  let shouldContinue = false;

  // Firebase에서 상태 로딩
  if (useFirebase) {
    try {
      const docId = `${classCode}_${studentId}`;
      const doc = await db.collection("students").doc(docId).get();
      if (doc.exists) {
        const data = doc.data();
        if (data.appState) {
          window.appState.surveyScores = data.appState.surveyScores || window.appState.surveyScores;
          window.appState.completedTasks = data.appState.completedTasks || [];
          window.appState.recommendedRoute = data.appState.recommendedRoute || [];
          window.appState.currentSceneIndex = data.appState.currentSceneIndex || 0;
          window.appState.surveyIndex = data.appState.surveyIndex || 0;
          window.appState.taskAnswers = data.appState.taskAnswers || {};
          hasHistory = true;
        }
      }
      
      // 회원 정보 이름 로드
      if (window.appState.isMember) {
        const userDoc = await db.collection("users").doc(studentId).get();
        if (userDoc.exists) {
          window.appState.studentName = userDoc.data().name || "";
        }
      } else {
        window.appState.studentName = studentId;
      }
    } catch (e) {
      console.error("Firebase 데이터 동기화 조회 오류:", e);
    }
  } else {
    window.appState.studentName = studentId;
  }

  if (hasHistory && window.appState.recommendedRoute.length > 0) {
    shouldContinue = confirm("이전에 수행하던 진행 이력이 있습니다.\n이어서 계속하시겠습니까?\n\n('취소'를 누르시면 데이터가 초기화되고 처음 프롤로그부터 시작합니다.)");
    if (!shouldContinue) {
      // 로컬 스토리지 데이터 초기화 및 전역 상태 리셋
      const key = `mindweb_${classCode}_${studentId}`;
      localStorage.removeItem(key);
      window.appState.completedTasks = [];
      window.appState.recommendedRoute = [];
      window.appState.taskAnswers = {};
      for (let k in window.appState.surveyScores) { window.appState.surveyScores[k] = 0; }
      
      if (useFirebase) {
        try {
          const docId = `${classCode}_${studentId}`;
          await db.collection("students").doc(docId).update({
            appState: firebase.firestore.FieldValue.delete()
          });
        } catch (e) {}
      }
    }
  }

  if (useFirebase) {
    try {
      const docId = `${classCode}_${studentId}`;
      await db.collection("students").doc(docId).set({
        classCode, studentId,
        isClassMode: window.appState.isClassMode,
        isMember: window.appState.isMember,
        stage: (hasHistory && shouldContinue) ? "진행 중" : "프롤로그 진입",
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    } catch (e) {}
  } else {
    mockStudents.push({ classCode, studentId, stage: "진행 중", scanResult: "대기중" });
  }

  if (hasHistory && shouldContinue && window.appState.recommendedRoute.length > 0) {
    // 이미 설문을 마쳐서 맵 데이터가 있다면 바로 맵으로
    switchView('view-map');
    renderMap();
  } else {
    // 처음이라면 프롤로그
    switchView('view-prologue');
    startPrologue();
  }
}

// ==========================================
// [1. 프롤로그 엔진]
// ==========================================
const competencyBoxes = [
  { id: "box-empathy", name: "사이버 공감", img: "images/icon_empathy.webp", left: "24%", top: "8%" },
  { id: "box-comm", name: "사이버 의사소통", img: "images/icon_comm.webp", left: "42%", top: "8%" },
  { id: "box-emotion", name: "사이버 감정조절", img: "images/icon_emotion.webp", left: "60%", top: "8%" },
  { id: "box-conflict", name: "사이버 갈등관리 및 문제해결", img: "images/icon_conflict.webp", left: "78%", top: "8%" },
  { id: "box-violence", name: "사이버폭력 인식 및 대처", img: "images/icon_violence.webp", left: "24%", top: "36%" },
  { id: "box-ethics", name: "인터넷 윤리의식 및 활용", img: "images/icon_ethics.webp", left: "42%", top: "36%" },
  { id: "box-selfcontrol", name: "사이버 자기조절", img: "images/icon_selfcontrol.webp", left: "60%", top: "36%" },
  { id: "box-esteem", name: "사이버 자기존중감", img: "images/icon_esteem.webp", left: "78%", top: "36%" }
];

const scenes = [
  { bgName: "교실", bgColor: "#3b4d45", effect: "", speaker: "나", text: "휴.. 태블릿 활용 수업 끝났다. 패드 정리해서 충전함에 넣어야지..." },
  { bgName: "교실", bgColor: "#3b4d45", effect: "", speaker: "나", text: "(멈칫하며) 하아... 그런데 어제 일때문에 오늘 하루종일 집중이 안되네.. 계속 생각나..." },
  { bgName: "어제 저녁, 방 안", bgColor: "#111", effect: "effect-blur", speaker: "나", text: "어제 저녁에 민호랑 지수랑 같이 온라인 게임을 할 때였어. 내가 게임에서 실수를 했다고 민호가 채팅창에 엄청 핀잔을 줬지..." },
  { bgName: "어제 저녁, 방 안", bgColor: "#111", effect: "effect-blur", speaker: "민호(채팅)", text: "야!! 너 때문에 졌잖아! 진짜 못하네, 짜증 나니까 그냥 나가라;;" },
  { bgName: "어제 저녁, 방 안", bgColor: "#111", effect: "effect-blur", speaker: "지수(채팅)", text: "인정 ㅋㅋㅋ" },
  { bgName: "어제 저녁, 방 안", bgColor: "#111", effect: "effect-blur", speaker: "나", text: "어쩌라고!!! 나 게임 안해!!!" },
  { bgName: "어제 저녁, 방 안", bgColor: "#000", effect: "effect-power-off", speaker: "나", text: "지수까지 같이 웃는 걸 보고 너무 속상해서 그냥 게임을 꺼버렸는데... 밤새 마음이 안 좋았어." },
  { bgName: "교실", bgColor: "#3b4d45", effect: "effect-zoom", speaker: "민호", text: "[교실 저편에서 들리는 민호의 큰 웃음소리] 하하하! 대박! 진짜 웃겨!" },
  { bgName: "교실", bgColor: "#3b4d45", effect: "effect-zoom", speaker: "나", text: "(깜짝 놀라며) 헉...! 민호랑 지수는 아무 일도 없었다는 듯이 저렇게 잘 놀고 있네..." },
  { bgName: "교실", bgColor: "#3b4d45", effect: "effect-zoom", speaker: "나", text: "게임 속 일이라 <span style='color: #ff79c6;'>로그아웃하면 끝인 줄 알았는데...</span> 막상 교실에서 얼굴을 보니 왜 이렇게 <span style='color: #ffeb3b;'>마음이 무겁고 콕콕 찌를까?</span>" },
  { bgName: "교실", bgColor: "#222", effect: "effect-glitch", speaker: "나", text: "어? 뭐야? 패드 화면이 왜 이래? 고장 났나?" },
  { bgName: "교실", bgColor: "#2c2400", effect: "effect-glow", speaker: "마음 온(ON)", text: "치익- 치익- 마침내 연결 성공! 안녕? 난 디지털 세상의 마음 에너지를 연구하는 AI, '<span style='color: #00ffff;'>마음 온(ON)</span>'이야!", showFairy: true },
  { bgName: "교실", bgColor: "#2c2400", effect: "effect-glow", speaker: "나", text: "(소곤거리며) 으악, 깜짝이야! 너... 정체가 뭐야? 내 패드에 이런 앱 없었는데?", showFairy: true },
  { bgName: "교실", bgColor: "#2c2400", effect: "effect-glow", speaker: "마음 온(ON)", text: "난 고장 난 게 아니야! <span style='color: #ff79c6;'>디지털 세상의 상처</span>로 진짜 교실의 <span style='color: #00ff88;'>마음 온도</span>가 뚝 떨어진 친구를 찾고 있었어. 바로 너처럼!", showFairy: true },
  { bgName: "교실", bgColor: "#091223", effect: "", speaker: "나", text: "마음 온도...? 그게 무슨 소리야?", showFairy: true },
  { bgName: "교실", bgColor: "#091223", effect: "effect-portal", speaker: "마음 온(ON)", text: "자! 나를 따라와!", showFairy: true },
  { bgName: "마음웹", bgColor: "#091223", effect: "", speaker: "마음 온(ON)", text: "이것 봐! 이게 바로 너와 친구들의 마음이 촘촘하게 연결된 '<span style='color: #00ffff;'>마음웹(Mind-Web)</span>'이야!", showFairy: true, fairyPosition: "top-left" },
  { bgName: "마음웹", bgColor: "#050a14", effect: "effect-frozen", speaker: "마음 온(ON)", text: "어제 너희가 게임에서 거친 말을 쓰고 상처를 입은 바람에, 너희를 연결하던 마음웹이 <span style='color: #ffeb3b;'>꽁꽁 얼어붙어 버렸어!</span>", showFairy: true, fairyPosition: "top-left" },
  { bgName: "마음웹", bgColor: "#050a14", effect: "effect-frozen", speaker: "마음 온(ON)", text: "네가 오늘 아침부터 느꼈던 그 '마음이 무겁고 콕콕 찌르는 기분'이 바로 이 마음웹이 보낸 신호야.", showFairy: true, fairyPosition: "top-left" },
  { bgName: "마음웹", bgColor: "#050a14", effect: "effect-frozen", speaker: "마음 온(ON)", text: "<span style='color: #00ff88;'>디지털 공간과 현실의 마음은 하나로 이어져 있거든.</span>", showFairy: true, fairyPosition: "top-left" },
  { bgName: "마음웹", bgColor: "#050a14", effect: "effect-frozen", speaker: "나", text: "내 마음이 불편했던 이유가... 진짜 이것 때문이라고? 그럼 어떻게 해야 해?", showFairy: true, fairyPosition: "top-left" },
  { bgName: "마음웹", bgColor: "#111", effect: "", speaker: "마음 온(ON)", text: "우리 반 마음웹을 다시 따뜻하게 녹일 수 있는 사람은 어제의 일을 후회하고 바꾸고 싶어 하는 너뿐이야!", showFairy: true, fairyPosition: "top-left" },
  { bgName: "마음웹", bgColor: "#111", effect: "", speaker: "나", text: "내가... 마음웹을 고칠 수 있다고? 어떻게 해야 하는데?", showFairy: true, fairyPosition: "top-left", competencyShowCount: 0 },
  { bgName: "마음웹", bgColor: "#111", effect: "", speaker: "마음 온(ON)", text: "바로 <span style='color: #00ff88;'>사이버 어울림</span> 역량을 기르는 거지!", showFairy: true, fairyPosition: "top-left", competencyShowCount: 0 },
  { bgName: "마음웹", bgColor: "#111", effect: "", speaker: "나", text: "사이버 어울림 역량? 그게 뭔데?", showFairy: true, fairyPosition: "top-left", competencyShowCount: 0 },
  { bgName: "마음웹", bgColor: "#111", effect: "", speaker: "마음 온(ON)", text: "사이버 어울림 역량은 <span style='color: #00ff88;'>디지털 세상에서 나를 안전하게 지키고</span>, 친구들과 <span style='color: #ffeb3b;'>오해 없이 소통</span>하기 위해 꼭 갖춰야 할 <span style='color: #00ffff;'>8가지 필수 역량</span>이야!", showFairy: true, fairyPosition: "top-left", competencyShowCount: 0, showCyberHand: true },
  { bgName: "마음웹", bgColor: "#111", effect: "", speaker: "마음 온(ON)", text: "화면 너머에 있는 친구의 상황을 나의 일처럼 이해하고 진짜 기분을 파악하는 <span style='color: #00ff88;'>사이버 공감</span> 역량!", showFairy: true, fairyPosition: "top-left", competencyShowCount: 1 },
  { bgName: "마음웹", bgColor: "#111", effect: "", speaker: "마음 온(ON)", text: "서로 얼굴이 보이지 않는 온라인에서도 내 생각과 감정을 오해 없이 바르게 전달하는 <span style='color: #00ff88;'>사이버 의사소통</span> 역량!", showFairy: true, fairyPosition: "top-left", competencyShowCount: 2 },
  { bgName: "마음웹", bgColor: "#111", effect: "", speaker: "마음 온(ON)", text: "불쾌하거나 화가 나는 상황이 생겼을 때, 충동적으로 반응하지 않고 내 감정을 차분하게 가라앉히는 <span style='color: #00ff88;'>사이버 감정조절</span> 역량!", showFairy: true, fairyPosition: "top-left", competencyShowCount: 3 },
  { bgName: "마음웹", bgColor: "#111", effect: "", speaker: "마음 온(ON)", text: "스마트폰이나 게임을 더 하고 싶은 충동적인 유혹을 이겨내고, 스스로 사용 시간을 멈출 수 있는 <span style='color: #00ff88;'>사이버 자기조절</span> 역량!", showFairy: true, fairyPosition: "top-left", competencyShowCount: 4 },
  { bgName: "마음웹", bgColor: "#111", effect: "", speaker: "마음 온(ON)", text: "단순한 장난과 진짜 폭력의 차이를 구분하고, 위험한 일이 생겼을 때 나와 친구를 안전하게 보호하는 <span style='color: #00ff88;'>사이버폭력 인식 및 대처</span> 역량!", showFairy: true, fairyPosition: "top-left", competencyShowCount: 5 },
  { bgName: "마음웹", bgColor: "#111", effect: "", speaker: "마음 온(ON)", text: "온라인 갈등이나 오해를 피하지 않고, 지혜롭게 해결해 관계를 회복하는 <span style='color: #00ff88;'>사이버 갈등관리 및 문제해결</span> 역량!", showFairy: true, fairyPosition: "top-left", competencyShowCount: 6 },
  { bgName: "마음웹", bgColor: "#111", effect: "", speaker: "마음 온(ON)", text: "SNS 속 다른 사람의 모습과 나를 비교하지 않고, 나의 있는 그대로의 모습을 인정하고 존중하는 <span style='color: #00ff88;'>사이버 자기존중감</span> 역량!", showFairy: true, fairyPosition: "top-left", competencyShowCount: 7 },
  { bgName: "마음웹", bgColor: "#111", effect: "", speaker: "마음 온(ON)", text: "내 소중한 개인정보를 보호하고, 인터넷을 사용하며 진짜 정보를 판별하는 <span style='color: #00ff88;'>인터넷 윤리의식 및 활용</span> 역량!", showFairy: true, fairyPosition: "top-left", competencyShowCount: 8 },
  { bgName: "마음웹", bgColor: "#111", effect: "", speaker: "마음 온(ON)", text: "지금 네 마음 배터리가 어떤 상태인지 분석하기 위해 [<span style='color: #00ffff;'>마음웹 스캐닝</span>]을 시작할게! 나와 대화하듯 솔직하게 대답해 줘!", showFairy: true, fairyPosition: "top-left", competencyShowCount: 8, isLast: true }
];

window.skipPrologue = function() {
  if (window.appState.isClassMode) {
    switchView('view-map');
    renderMap();
  } else {
    switchView('view-survey');
    window.startSurvey();
  }
}

window.startPrologue = function() {
  window.appState.currentSceneIndex = 0;
  renderScene();
}

function renderScene() {
  const scene = scenes[window.appState.currentSceneIndex];
  const sceneContainer = document.getElementById('scene-container');
  
  const talkNum = window.appState.currentSceneIndex + 1;
  let bgImg = "";
  if (talkNum >= 1 && talkNum <= 2) bgImg = "images/story_bg1.webp";
  else if (talkNum >= 3 && talkNum <= 7) bgImg = "images/story_bg2.webp";
  else if (talkNum >= 8 && talkNum <= 10) bgImg = "images/story_bg3.webp";
  else if (talkNum >= 11 && talkNum <= 15) bgImg = "images/story_bg4.webp";
  else if (talkNum === 16) bgImg = "images/story_bg5.webp";
  else if (talkNum >= 17) bgImg = "images/story_bg6.webp";

  if (bgImg) {
    sceneContainer.style.backgroundImage = `url('${bgImg}')`;
    sceneContainer.style.backgroundSize = "cover";
    sceneContainer.style.backgroundPosition = "center";
  } else {
    sceneContainer.style.backgroundImage = "none";
  }

  sceneContainer.style.backgroundColor = scene.bgColor;
  sceneContainer.className = scene.effect || "";
  
  const labelEl = document.getElementById('scene-label');
  if (scene.bgName) {
    labelEl.innerText = scene.bgName;
    labelEl.style.display = 'block';
  } else {
    labelEl.style.display = 'none';
  }
  
  const fairyEl = document.getElementById('fairy-char');
  fairyEl.style.display = scene.showFairy ? 'block' : 'none';
  if (scene.fairyPosition === 'top-left') {
    fairyEl.classList.add('top-left');
  } else {
    fairyEl.classList.remove('top-left');
  }
  if (typeof scene.competencyShowCount === 'number' && scene.competencyShowCount >= 1) {
    fairyEl.style.backgroundImage = "url('images/maeumon_intro.webp')";
  } else {
    fairyEl.style.backgroundImage = "";
  }
  const speakerEl = document.getElementById('speaker-name');
  speakerEl.innerText = scene.speaker;
  
  const dialogBoxEl = document.getElementById('dialog-box');
  dialogBoxEl.classList.remove('effect-shake-dialog', 'effect-giggle-dialog');
  if (scene.speaker === "민호(채팅)") {
    dialogBoxEl.classList.add('effect-shake-dialog');
  } else if (scene.speaker === "지수(채팅)") {
    dialogBoxEl.classList.add('effect-giggle-dialog');
  }
  
  if (scene.speaker === "민호(채팅)" || scene.speaker === "민호") {
    speakerEl.style.color = "#fd6f22";
  } else if (scene.speaker === "지수(채팅)") {
    speakerEl.style.color = "#58ccff";
  } else if (scene.speaker === "마음 온(ON)") {
    speakerEl.style.color = "#01fcfa";
  } else {
    speakerEl.style.color = "var(--point-yellow)";
  }
  
  if (scene.isLast) {
    if (window.appState.isClassMode) {
      document.getElementById('dialog-text').innerHTML = "자, 나랑 같이 사이버 어울림 역량을 길러 얼어붙은 마음웹을 다시 따뜻하게 녹여볼까?";
    } else {
      document.getElementById('dialog-text').innerHTML = "역량을 기르기 전에 너의 사이버 어울림 역량 상태는 어떤지 먼저 진단해볼까?";
    }
  } else {
    document.getElementById('dialog-text').innerHTML = scene.text;
  }

  // 8대 역량 상자 동적 렌더링 제어
  const compContainer = document.getElementById('competency-box-container');
  if (compContainer) {
    compContainer.innerHTML = ""; // 기존 상자 초기화
    if (typeof scene.competencyShowCount === 'number' && scene.competencyShowCount > 0) {
      for (let i = 0; i < scene.competencyShowCount; i++) {
        const box = competencyBoxes[i];
        const boxEl = document.createElement('div');
        boxEl.id = box.id;
        boxEl.style.position = "absolute";
        boxEl.style.left = box.left;
        boxEl.style.top = box.top;
        boxEl.style.width = "13cqw";
        boxEl.style.height = "14cqw";
        boxEl.style.backgroundColor = "#ffffff";
        boxEl.style.border = "0.2cqw solid #000000";
        boxEl.style.boxShadow = "0.3cqw 0.3cqw 0 #000000";
        boxEl.style.display = "flex";
        boxEl.style.flexDirection = "column";
        boxEl.style.alignItems = "center";
        boxEl.style.justifyContent = "center";
        boxEl.style.padding = "0.4cqw";
        boxEl.style.boxSizing = "border-box";
        boxEl.style.animation = "popIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards";
        
        // 이미지
        const imgEl = document.createElement('img');
        imgEl.src = box.img;
        imgEl.alt = box.name;
        imgEl.style.width = "6.5cqw";
        imgEl.style.height = "6.5cqw";
        imgEl.style.objectFit = "contain";
        imgEl.style.imageRendering = "pixelated";
        imgEl.style.marginBottom = "0.5cqw";
        
        // 텍스트
        const textEl = document.createElement('div');
        textEl.innerText = box.name;
        textEl.style.fontFamily = "'DungGeunMo', monospace";
        textEl.style.fontSize = "1.15cqw";
        textEl.style.fontWeight = "bold";
        textEl.style.color = "#000000";
        textEl.style.textAlign = "center";
        textEl.style.wordBreak = "keep-all";
        
        boxEl.appendChild(imgEl);
        boxEl.appendChild(textEl);
        compContainer.appendChild(boxEl);
      }
    }
  }

  // cyber_hand 팝업 연출 제어
  const handPopup = document.getElementById('cyber-hand-popup');
  if (handPopup) {
    if (scene.showCyberHand) {
      handPopup.style.display = 'block';
      setTimeout(() => {
        handPopup.style.transform = 'translate(-50%, -50%) scale(1)';
        handPopup.style.opacity = '1';
      }, 20);
    } else {
      handPopup.style.transform = 'translate(-50%, -50%) scale(0)';
      handPopup.style.opacity = '0';
      setTimeout(() => {
        const currentScene = scenes[window.appState.currentSceneIndex];
        if (currentScene && !currentScene.showCyberHand) {
          handPopup.style.display = 'none';
        }
      }, 350);
    }
  }

  const nextBtn = document.getElementById('next-btn');
  if (scene.isLast) {
    if (window.appState.isClassMode) {
      nextBtn.innerHTML = "마음<br>웹으로<br>이동 ▶";
      nextBtn.onclick = function() {
        switchView('view-map');
        renderMap();
      };
    } else {
      nextBtn.innerHTML = "역량<br>진단<br>시작 ▶";
      nextBtn.onclick = function() {
        switchView('view-survey');
        window.startSurvey();
      };
    }
    nextBtn.style.backgroundColor = "var(--point-yellow)";
    nextBtn.style.width = "8.5cqw";
    nextBtn.style.height = "10.4cqw";
    nextBtn.style.top = "1.8cqw";
    nextBtn.style.bottom = "1.8cqw";
    nextBtn.style.display = "flex";
    nextBtn.style.alignItems = "center";
    nextBtn.style.justifyContent = "center";
    nextBtn.style.textAlign = "center";
    nextBtn.style.fontSize = "1.3cqw";
    nextBtn.style.lineHeight = "1.2";
    nextBtn.style.padding = "0.5cqw 0.5cqw";
  } else {
    nextBtn.innerHTML = "다음 ▼";
    nextBtn.style.backgroundColor = "var(--point-yellow)";
    nextBtn.onclick = window.nextScene;
    nextBtn.style.width = "";
    nextBtn.style.height = "";
    nextBtn.style.top = "";
    nextBtn.style.bottom = "";
    nextBtn.style.display = "";
    nextBtn.style.alignItems = "";
    nextBtn.style.justifyContent = "";
    nextBtn.style.textAlign = "";
    nextBtn.style.fontSize = "";
    nextBtn.style.lineHeight = "";
    nextBtn.style.padding = "";
  }

  // 이전 버튼 노출 여부 결정
  const prevBtn = document.getElementById('prev-btn');
  if (prevBtn) {
    if (window.appState.currentSceneIndex === 0) {
      prevBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'block';
    }
  }
}

window.nextScene = function() {
  if (window.appState.currentSceneIndex < scenes.length - 1) {
    window.appState.currentSceneIndex++;
    renderScene();
  }
}

window.prevScene = function() {
  if (window.appState.currentSceneIndex > 0) {
    window.appState.currentSceneIndex--;
    renderScene();
  }
}

// ==========================================
// [2. 마음웹 스캐닝 (설문 모듈)]
// ==========================================
window.startSurvey = function() {
  window.appState.surveyIndex = 0;
  renderSurveyQuestion();
}

function renderSurveyQuestion() {
  const index = window.appState.surveyIndex;
  const q = questions[index];
  
  const pct = ((index + 1) / questions.length) * 100;
  document.getElementById('survey-bar-fill').style.width = `${pct}%`;
  document.getElementById('survey-current').innerText = index + 1;
  
  document.getElementById('survey-question').innerText = q.text;
}

window.answerSurvey = function(score) {
  const index = window.appState.surveyIndex;
  const q = questions[index];
  
  let finalScore = score;
  if (q.isReverse) {
    finalScore = 6 - score;
  }
  
  window.appState.surveyScores[q.category] += finalScore;
  
  if (index < questions.length - 1) {
    window.appState.surveyIndex++;
    renderSurveyQuestion();
  } else {
    finishSurvey();
  }
}

window.skipSurvey = function() {
  for (let k in window.appState.surveyScores) {
    window.appState.surveyScores[k] = Math.floor(Math.random() * 6) + 5;
  }
  finishSurvey(true);
}

function finishSurvey(isSkipped = false) {
  const scoresArr = Object.keys(window.appState.surveyScores).map(key => ({
    category: key,
    score: window.appState.surveyScores[key]
  }));
  
  scoresArr.sort((a, b) => a.score - b.score);
  window.appState.recommendedRoute = scoresArr.map(item => item.category);
  saveLocalState();
  
  if (useFirebase) {
    const docId = `${window.appState.classCode}_${window.appState.studentId}`;
    db.collection("students").doc(docId).set({
      stage: "맵 이동",
      scanResult: "완료",
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
  }

  if (isSkipped) {
    switchView('view-map');
    renderMap();
  } else {
    switchView('view-loading');

    const resultPanel = document.getElementById('loading-result-panel');
    const subText = document.getElementById('loading-sub-text');
    const loadingFairy = document.getElementById('loading-fairy');
    const loadingTitle = document.getElementById('loading-title');
    const recommList = document.getElementById('loading-recomm-list');

    if (loadingFairy) {
      loadingFairy.style.backgroundImage = "url('images/maeumon_intro.webp')";
    }

    if (!window.appState.isClassMode) {
      if (loadingTitle) loadingTitle.innerText = "진단 완료!";
      if (subText) subText.style.display = 'none';
      if (resultPanel) resultPanel.style.display = 'flex';

      if (recommList) {
        recommList.innerHTML = "";
        window.appState.recommendedRoute.forEach((cat, index) => {
          const item = document.createElement('div');
          item.style.display = 'flex';
          item.style.alignItems = 'center';
          item.style.fontSize = '0.95cqw';
          item.style.color = '#fff';
          item.style.marginBottom = '0.3cqw';
          
          const badge = document.createElement('span');
          badge.innerText = `${index + 1}순위`;
          badge.style.backgroundColor = index === 0 ? 'var(--point-yellow)' : '#475569';
          badge.style.color = index === 0 ? '#000' : '#fff';
          badge.style.padding = '0.1cqw 0.6cqw';
          badge.style.marginRight = '1cqw';
          badge.style.fontWeight = 'bold';
          badge.style.fontFamily = "'DungGeunMo', monospace";

          const name = document.createElement('span');
          name.innerText = cat;
          name.style.fontFamily = "'DungGeunMo', monospace";
          name.style.fontWeight = index === 0 ? 'bold' : 'normal';
          if (index === 0) name.style.color = 'var(--point-yellow)';

          item.appendChild(badge);
          item.appendChild(name);
          recommList.appendChild(item);
        });
      }
    } else {
      if (loadingTitle) loadingTitle.innerHTML = "진단 완료!<br>마음웹 데이터를 분석 중...";
      if (subText) subText.style.display = 'block';
      if (resultPanel) resultPanel.style.display = 'none';

      setTimeout(() => {
        switchView('view-map');
        renderMap();
      }, 2000);
    }
  }
}

window.loadingConfirm = function() {
  switchView('view-map');
  renderMap();
};

window.renderMap = function() {
  const container = document.getElementById('map-nodes-container');
  const svg = document.getElementById('mind-web-svg');
  
  const soloMapArea = document.getElementById('solo-map-area');
  
  container.innerHTML = '';
  svg.innerHTML = '';
  
  const compTasks = window.appState.completedTasks;

  // 학급코드 여부와 관계없이 무조건 8대 역량 맵 화면(soloMapArea)을 노출합니다.
  if (soloMapArea) {
    soloMapArea.style.display = 'block';
  }

  const recommenderBar = document.getElementById('recommender-bar');
  if (window.appState.isClassMode) {
    recommenderBar.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px; width: 100%; padding: 0;">
        <div style="width: 50px; height: 50px; flex-shrink: 0; background: url('images/maeumon.webp') no-repeat center/contain; animation: miniFloat 2s ease-in-out infinite;"></div>
        <div style="font-size: 0.95rem; color: #01fcfa; font-weight: bold; flex-grow: 1; text-align: left; line-height: 1.3; word-break: keep-all; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);">
          친구들과 사이버 어울림 역량을 기르며, 마음 웹을 따뜻하게 녹여줘!
        </div>
      </div>
    `;
  } else {
    recommenderBar.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 8px; font-size: 1.15rem; width: 100%; border: 3px solid #000; background-color: #161920; padding: 12px 16px; border-radius: 8px; box-shadow: 4px 4px 0 #000; box-sizing: border-box;">
        <span id="recommender-title" style="font-weight: bold; font-size: 1.25rem; color: var(--point-yellow);">🎯 추천 순서:</span>
        <div id="recommender-list" style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px; line-height: 1.6; margin-top: 4px;"></div>
      </div>
    `;
    const recList = document.getElementById('recommender-list');
    const route = window.appState.recommendedRoute;
    const firstUncompIdx = route.findIndex(cat => !compTasks.includes(cat));
    
    route.forEach((cat, idx) => {
      const isComp = compTasks.includes(cat);
      let text = '';
      if (isComp) {
        text = `<span style="color: #2ed573; font-weight: bold; text-shadow: 0 0 4px rgba(46,213,115,0.4);">[✓] ${cat}</span>`;
      } else if (idx === firstUncompIdx) {
        text = `<span class="active-recomm-glow">👉 ${cat}</span>`;
      } else {
        text = `<span style="color: #8a9ba8;">${cat}</span>`;
      }
      recList.innerHTML += text;
      if (idx < route.length - 1) {
        recList.innerHTML += ` <span style="color: #4a5568; font-weight: bold; margin: 0 4px;">➔</span> `;
      }
    });
  }
    
  const nodeEls = [];
  
  mapNodes.forEach(node => {
    const isComp = compTasks.includes(node.category);
    
    const div = document.createElement('div');
    div.className = "map-node" + (isComp ? " completed" : "");
    div.style.left = `${node.x}%`;
    div.style.top = `${node.y}%`;
    div.title = node.category;
    div.onclick = () => window.enterTask(node.category);
    
    const iconFile = categoryIcons[node.category] || '';
    if (iconFile) {
      div.innerHTML = `<img src="${iconFile}" alt="${node.category}" style="width: 90px; height: 90px; object-fit: contain; filter: ${isComp ? 'none' : 'grayscale(100%) brightness(0.6)'}; transition: filter 0.5s ease; pointer-events: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1;">`;
    } else {
      div.innerHTML = `<span style="font-size: 3rem;">${isComp ? '🌟' : '❄️'}</span>`;
    }
    
    const label = document.createElement('div');
    label.className = "map-node-label";
    label.innerText = node.category;
    div.appendChild(label);
    
    container.appendChild(div);
    nodeEls.push({x: node.x, y: node.y, isComp: isComp});
  });

  // 정중앙 마음 하트 노드 추가
  const totalCount = 8;
  const isHeartCompleted = compTasks.length >= totalCount;
  const heartDiv = document.createElement('div');
  
  heartDiv.className = "map-heart" + (isHeartCompleted ? " completed" : " broken");
  heartDiv.style.left = "50%";
  heartDiv.style.top = "50%";
  
  if (isHeartCompleted) {
    heartDiv.innerHTML = `<span style="font-size: 4.9rem; filter: drop-shadow(0 0 10px rgba(255, 0, 0, 0.8));">❤️</span>`;
    heartDiv.title = "마음 온(ON) 완료! 아웃트로 보기";
    heartDiv.onclick = () => {
      if (typeof synth !== 'undefined' && synth.playSuccess) {
        try { synth.playSuccess(); } catch(e) {}
      }
      window.startOutro();
    };
  } else {
    heartDiv.innerHTML = `<span style="font-size: 4.9rem;">💔</span>`;
    heartDiv.title = "8개의 마음 에너지를 모아주세요";
    heartDiv.onclick = () => {
      if (typeof synth !== 'undefined' && synth.playSelect) {
        try { synth.playSelect(); } catch(e) {}
      }
      alert("8개의 사이버 어울림 역량 마음 에너지를 모두 켜면 하트가 활성화됩니다! 💔\n남은 과제들을 완료해 주세요.");
    };
  }
  
  const heartLabel = document.createElement('div');
  heartLabel.className = "map-node-label";
  heartLabel.style.bottom = "-49px";
  heartLabel.innerText = isHeartCompleted ? "마음 온(ON)!" : "";
  heartDiv.appendChild(heartLabel);
  
  container.appendChild(heartDiv);
  
  mapEdges.forEach(edge => {
    const n1 = nodeEls[edge[0]];
    const n2 = nodeEls[edge[1]];
    const bothComp = (n1.isComp && n2.isComp);
    
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", `${n1.x}%`);
    line.setAttribute("y1", `${n1.y}%`);
    line.setAttribute("x2", `${n2.x}%`);
    line.setAttribute("y2", `${n2.y}%`);
    line.setAttribute("class", bothComp ? "mind-line completed" : "mind-line");
    
    svg.appendChild(line);
  });

  // 중앙 하트와 각 활동들을 연결하는 방사형 선 렌더링
  nodeEls.forEach(n => {
    const bothComp = n.isComp;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", `${n.x}%`);
    line.setAttribute("y1", `${n.y}%`);
    line.setAttribute("x2", "50%");
    line.setAttribute("y2", "50%");
    line.setAttribute("class", bothComp ? "mind-line completed" : "mind-line");
    
    svg.appendChild(line);
  });
}

// ==========================================
// [4. 과제 화면 진입 및 처리]
// ==========================================
window.currentTaskCategory = "";

const categoryPages = {
  '사이버 공감': 'empathy.html',
  '사이버 의사소통': 'communication.html',
  '사이버 폭력인식 및 대처': 'cyber_hero.html',
  '사이버 자기조절': 'self_control.html',
  '사이버 감정조절': 'emotion_control.html',
  '인터넷 윤리의식 및 활용': 'ethics.html',
  '사이버 자기존중감': 'self_esteem.html',
  '사이버 갈등관리 및 문제해결': 'conflict_management.html'
};

const categoryIcons = {
  '사이버 공감': 'images/icon_empathy.webp',
  '사이버 의사소통': 'images/icon_comm.webp',
  '사이버 폭력인식 및 대처': 'images/icon_violence.webp',
  '사이버 자기조절': 'images/icon_selfcontrol.webp',
  '사이버 감정조절': 'images/icon_emotion.webp',
  '인터넷 윤리의식 및 활용': 'images/icon_ethics.webp',
  '사이버 자기존중감': 'images/icon_esteem.webp',
  '사이버 갈등관리 및 문제해결': 'images/icon_conflict.webp'
};

window.enterTask = function(category) {
  if (window.appState.completedTasks.includes(category)) {
    if (!confirm(`[${category}] 과제는 이미 마음 에너지를 채운 곳입니다. 복습을 위해 다시 학습하시겠습니까?`)) {
      return;
    }
  }
  window.currentTaskCategory = category;
  
  const page = categoryPages[category];
  if (page) {
    switchView('view-task-iframe');
    setTimeout(() => {
      document.getElementById('task-iframe').src = page;
    }, 50);
  } else {
    document.getElementById('task-title').innerText = `과제: [${category}]`;
    switchView('view-task');
  }
}

window.completeTask = function(category, answers) {
  const targetCategory = category || window.currentTaskCategory;
  if (targetCategory && !window.appState.completedTasks.includes(targetCategory)) {
    window.appState.completedTasks.push(targetCategory);
  }
  
  if (targetCategory) {
    window.appState.taskAnswers = window.appState.taskAnswers || {};
    if (answers) {
      const hasNewAnswers = Object.keys(answers).some(k => answers[k] && String(answers[k]).trim().length > 0);
      if (hasNewAnswers) {
        window.appState.taskAnswers[targetCategory] = window.appState.taskAnswers[targetCategory] || {};
        Object.assign(window.appState.taskAnswers[targetCategory], answers);
      }
    }
  }

  saveLocalState();
  
  if (targetCategory) {
    const icon = categoryIcons[targetCategory] || '';
    alert(`[${targetCategory}] 역량 배지를 획득하였습니다.\n마음 에너지가 채워졌습니다! ❤️`, null, icon);
  }
  
  window.returnToMap();
}

window.returnToMap = function() {
  document.getElementById('task-iframe').src = '';
  switchView('view-map');
  renderMap();
}

window.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'TASK_COMPLETE') {
    window.completeTask(event.data.category, event.data.answers);
  } else if (event.data && event.data.type === 'RETURN_TO_MAP') {
    window.returnToMap();
  } else if (event.data && event.data.type === 'REQ_STUDENT_INFO') {
    const iframe = document.getElementById('task-iframe');
    if (iframe && iframe.contentWindow) {
      const appState = window.appState || {};
      iframe.contentWindow.postMessage({
        type: 'RES_STUDENT_INFO',
        classCode: appState.classCode || "guest",
        studentId: appState.studentId || "guest",
        studentName: appState.studentName || "익명"
      }, '*');
    }
  }
});

window.addEventListener('DOMContentLoaded', () => {
});

// ==========================================
// [Screen 4: 아웃트로 엔진 (전면 개편)]
// ==========================================
const outroScenes = [
  {
    bgName: "마음웹",
    bgImg: "images/story_bg7.webp",
    speaker: "마음 온(ON)",
    text: "이것 봐! 네가 기른 '<span style='color: #00ff88;'>사이버 어울림 역량</span>' 덕분에 꽁꽁 얼어붙었던 우리 반 마음 웹이 <span style='color: #00ff88;'>따뜻하게 녹았어!</span>",
    showFairy: true,
    isPromiseScene: false
  },
  {
    bgName: "마음웹",
    bgImg: "images/story_bg7.webp",
    speaker: "나",
    text: "정말이네.. 차갑게 얼어있던 선들이 따스한 빛을 내며 다시 부드럽게 이어졌어!",
    showFairy: true,
    isPromiseScene: false
  },
  {
    bgName: "마음웹",
    bgImg: "images/story_bg7.webp",
    speaker: "마음 온(ON)",
    text: "이제 넌 <span style='color: #00ff88;'>사이버어울림 역량</span>을 모두 갖추었어. <span style='color: #00ff88;'>현실 교실</span>로 돌아가서도 이 마음을 유지해줘. 약속할 수 있지?",
    showFairy: true,
    isPromiseScene: true
  },
  {
    bgName: "교실",
    bgImg: "images/story_bg3.webp",
    speaker: "나",
    text: "어...? 다시 교실이다. 앗, 태블릿 화면도 원래대로 돌아왔네.",
    showFairy: false,
    isPromiseScene: false
  },
  {
    bgName: "교실",
    bgImg: "images/story_bg3.webp",
    speaker: "나",
    text: "신기하다. 아침까지만 해도 마음이 엄청 무겁고 콕콕 찔렀는데, 지금은 마음이 후련해.",
    showFairy: false,
    isPromiseScene: false
  },
  {
    bgName: "교실",
    bgImg: "images/story_bg3.webp",
    speaker: "나",
    text: "좋아! 어제 일은 내가 <span style='color: #ffeb3b;'>먼저 다가가서 솔직하게 내 마음을 이야기</span>해 봐야겠다. <span style='color: #ffeb3b;'>로그아웃 한다고 끝나는 게 아니니까!</span>",
    showFairy: false,
    isPromiseScene: false
  },
  {
    bgName: "교실",
    bgImg: "images/ending_friends.webp",
    speaker: "나",
    text: "얘들아! 어제 있었던 일......",
    showFairy: false,
    isPromiseScene: false,
    isLast: true
  }
];

let currentOutroIndex = 0;

window.startOutro = function() {
  switchView('view-outro');
  currentOutroIndex = 0;
  
  const overlay = document.getElementById('ending-white-overlay');
  if (overlay) {
    overlay.style.display = 'none';
    overlay.style.opacity = '0';
  }
  const credit = document.getElementById('ending-title-credit');
  if (credit) {
    credit.style.opacity = '0';
  }
  
  renderOutroScene();
}

function renderOutroScene() {
  const scene = outroScenes[currentOutroIndex];
  const viewOutro = document.getElementById('view-outro');
  
  if (scene.bgImg) {
    viewOutro.style.backgroundImage = `url('${scene.bgImg}?v=${new Date().getTime()}')`;
  } else {
    viewOutro.style.backgroundImage = 'none';
    viewOutro.style.backgroundColor = '#111';
  }
  
  const labelEl = document.getElementById('outro-scene-label');
  if (scene.bgName) {
    labelEl.innerText = scene.bgName;
    labelEl.style.display = 'block';
  } else {
    labelEl.style.display = 'none';
  }
  
  const fairyEl = document.getElementById('outro-fairy-char');
  if (fairyEl) {
    fairyEl.style.display = scene.showFairy ? 'block' : 'none';
    if (scene.bgName === "마음웹") {
      fairyEl.classList.add('top-left');
      fairyEl.style.backgroundImage = `url('images/maeumon_outro.webp?v=${new Date().getTime()}')`;
    } else {
      fairyEl.classList.remove('top-left');
    }
  }
  
  const speakerEl = document.getElementById('outro-speaker');
  const textEl = document.getElementById('outro-text');
  speakerEl.innerText = scene.speaker;
  textEl.innerHTML = scene.text;
  
  if (scene.speaker === "마음 온(ON)") {
    speakerEl.style.color = "#01fcfa";
  } else {
    speakerEl.style.color = "var(--point-yellow)";
  }
  
  const nextBtn = document.getElementById('outro-dialog-next');
  const promiseBtn = document.getElementById('outro-promise-btn');
  
  if (scene.isPromiseScene) {
    nextBtn.style.display = 'none';
    promiseBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'block';
    promiseBtn.style.display = 'none';
    
    if (scene.isLast) {
      nextBtn.innerText = "종료 ▶";
    } else {
      nextBtn.innerText = "다음 ▼";
    }
  }

  const prevBtn = document.getElementById('outro-dialog-prev');
  if (prevBtn) {
    if (currentOutroIndex === 0 || scene.isPromiseScene) {
      prevBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'block';
    }
  }
}

window.nextOutroScene = function() {
  const scene = outroScenes[currentOutroIndex];
  if (scene.isLast) {
    runEndingCreditSequence();
    return;
  }
  
  currentOutroIndex++;
  renderOutroScene();
}

window.prevOutroScene = function() {
  if (currentOutroIndex > 0) {
    currentOutroIndex--;
    renderOutroScene();
  }
}

window.promiseAndContinue = function() {
  if (window.appState && window.appState.isClassMode) {
    showCyberPromiseModal();
  } else {
    proceedOriginalPromiseFlow();
  }
}

function proceedOriginalPromiseFlow() {
  const promiseBtn = document.getElementById('outro-promise-btn');
  if (promiseBtn) promiseBtn.style.display = 'none';

  const viewOutro = document.getElementById('view-outro');
  if (viewOutro) {
    viewOutro.classList.add('effect-vortex');
  }

  // 2.5초 동안 소용돌이 연출 진행 후 교실 씬으로 전환
  setTimeout(() => {
    if (viewOutro) {
      viewOutro.classList.remove('effect-vortex');
    }
    currentOutroIndex++;
    renderOutroScene();
  }, 2500);
}

function runEndingCreditSequence() {
  const overlay = document.getElementById('ending-white-overlay');
  const credit = document.getElementById('ending-title-credit');
  
  overlay.style.display = 'flex';
  setTimeout(() => {
    overlay.style.opacity = '1';
  }, 50);
  
  setTimeout(() => {
    credit.style.opacity = '1';
  }, 2000);
  
  setTimeout(() => {
    credit.style.opacity = '0';
    setTimeout(() => {
      // 1. 하얀 화면 오버레이(opacity: 1)가 다 덮은 상태에서 먼저 로그아웃을 처리하여 뒤쪽 뷰를 로그인 화면으로 전환합니다.
      logout();
      
      // 2. 로그인 화면이 깔린 후 하얀 화면을 서서히 걷어내어 페이드인 연출을 진행합니다.
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 2000);
    }, 1500);
  }, 5500);
}



// ==========================================
// [개인정보처리방침 모달 제어 기능]
// ==========================================
window.showPrivacyModal = function() {
  const modal = document.getElementById('privacy-modal');
  const viewArea = document.getElementById('privacy-content-view');
  if (viewArea) {
    viewArea.textContent = PRIVACY_POLICY_CONTENT;
  }
  if (modal) {
    modal.style.display = 'flex';
  }
};

window.closePrivacyModal = function() {
  const modal = document.getElementById('privacy-modal');
  if (modal) {
    modal.style.display = 'none';
  }
};

// ==========================================
// [회원탈퇴 모달 제어 및 처리 기능]
// ==========================================
window.showWithdrawModal = function(defaultRole) {
  const modal = document.getElementById('withdraw-modal');
  if (modal) {
    document.getElementById('withdraw-id-input').value = '';
    document.getElementById('withdraw-pw-input').value = '';
    
    if (defaultRole === 'teacher') {
      const teacherRadio = document.querySelector('input[name="withdraw-role"][value="teacher"]');
      if (teacherRadio) teacherRadio.checked = true;
    } else {
      const studentRadio = document.querySelector('input[name="withdraw-role"][value="student"]');
      if (studentRadio) studentRadio.checked = true;
    }
    
    modal.style.display = 'flex';
  }
};

window.closeWithdrawModal = function() {
  const modal = document.getElementById('withdraw-modal');
  if (modal) {
    modal.style.display = 'none';
  }
};

window.submitWithdrawal = async function() {
  const role = document.querySelector('input[name="withdraw-role"]:checked').value;
  const id = document.getElementById('withdraw-id-input').value.trim();
  const pw = document.getElementById('withdraw-pw-input').value.trim();

  if (!id || !pw) {
    alert("아이디와 비밀번호를 모두 입력해 주세요.");
    return;
  }

  const confirmMsg = `정말로 회원탈퇴를 진행하시겠습니까?\n모든 데이터가 삭제되며 이 작업은 되돌릴 수 없습니다.`;
  if (!confirm(confirmMsg)) return;

  if (useFirebase) {
    try {
      // 1. Firestore에서 해당 ID의 사용자 문서 조회하여 검증
      const userDoc = await db.collection("users").doc(id).get();
      if (!userDoc.exists) {
        alert("입력하신 회원 정보가 존재하지 않습니다.");
        return;
      }

      const userData = userDoc.data();
      if (userData.role !== role) {
        alert("선택하신 가입 유형과 일치하지 않는 아이디입니다.");
        return;
      }

      const email = userData.email;
      
      // 2. 비밀번호 본인 확인 검증을 위한 Firebase Auth 임시 로그인
      const tempCred = await auth.signInWithEmailAndPassword(email, pw);
      const currentUser = tempCred.user;

      if (!currentUser) {
        alert("본인 인증에 실패했습니다.");
        return;
      }

      // 3. 연쇄 삭제 작업 (Firestore)
      if (role === 'student') {
        // 학생인 경우: students 컬렉션에서 studentId가 일치하는 문서들을 일괄 삭제
        const studentDocs = await db.collection("students").where("studentId", "==", id).get();
        if (!studentDocs.empty) {
          const batch = db.batch();
          studentDocs.forEach(doc => {
            batch.delete(doc.ref);
          });
          await batch.commit();
        }
      } else if (role === 'teacher') {
        // 교사인 경우: 해당 교사가 개설한 모든 학급 삭제
        const classDocs = await db.collection("classes").where("teacherUid", "==", currentUser.uid).get();
        if (!classDocs.empty) {
          const batch = db.batch();
          classDocs.forEach(doc => {
            batch.delete(doc.ref);
          });
          await batch.commit();
        }
      }

      // 4. users 컬렉션의 프로필 문서 삭제
      await db.collection("users").doc(id).delete();

      // 5. Firebase Auth 사용자 최종 삭제
      await currentUser.delete();

      alert("회원탈퇴가 정상적으로 완료되었습니다.\n그동안 서비스를 이용해 주셔서 감사합니다.");
      window.closeWithdrawModal();
      
      // 자동 로그인용 세션 제거 및 로그아웃
      localStorage.removeItem('last_sync_session');
      window.logout();

    } catch (err) {
      console.error("회원탈퇴 처리 중 에러:", err);
      if (err.code === "auth/requires-recent-login") {
        alert("보안을 위해 최근에 로그인한 내역이 필요합니다. 다시 로그인 후 탈퇴를 진행해 주세요.");
      } else {
        alert("회원탈퇴 진행 중 오류가 발생했습니다: " + err.message);
      }
    }
  } else {
    // 로컬 스토리지 폴백 모드 탈퇴 처리
    let users = JSON.parse(localStorage.getItem('registered_users') || '[]');
    const userIndex = users.findIndex(u => u.id === id && u.pw === pw && u.role === role);

    if (userIndex === -1) {
      alert("입력하신 아이디 또는 비밀번호가 등록된 정보와 일치하지 않습니다. (로컬모드)");
      return;
    }

    // 사용자 정보 삭제
    users.splice(userIndex, 1);
    localStorage.setItem('registered_users', JSON.stringify(users));

    // 로컬 학습 진행 데이터들 파기
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('mindweb_') && key.endsWith(`_${id}`)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(k => localStorage.removeItem(k));

    alert("회원탈퇴가 완료되었습니다. (로컬모드)");
    window.closeWithdrawModal();
    
    localStorage.removeItem('last_sync_session');
    window.logout();
  }
};

// ==========================================
// [아이디/비밀번호 찾기 모달 제어 및 처리 기능]
// ==========================================
window.showFindAccountModal = function() {
  const modal = document.getElementById('find-account-modal');
  if (modal) {
    document.getElementById('find-id-email').value = '';
    document.getElementById('find-pw-id').value = '';
    document.getElementById('find-pw-email').value = '';
    const resultBox = document.getElementById('find-id-result');
    if (resultBox) {
      resultBox.style.display = 'none';
      resultBox.innerText = '';
    }
    // 기본적으로 '아이디 찾기' 탭 활성화
    window.switchFindTab('id');
    modal.style.display = 'flex';
  }
};

window.closeFindAccountModal = function() {
  const modal = document.getElementById('find-account-modal');
  if (modal) {
    modal.style.display = 'none';
  }
};

window.switchFindTab = function(tab) {
  const tabId = document.getElementById('tab-find-id');
  const tabPw = document.getElementById('tab-find-pw');
  const panelId = document.getElementById('panel-find-id');
  const panelPw = document.getElementById('panel-find-pw');

  if (tab === 'id') {
    if (tabId) {
      tabId.style.backgroundColor = 'var(--point-yellow)';
      tabId.style.color = '#000';
    }
    if (tabPw) {
      tabPw.style.backgroundColor = '#555';
      tabPw.style.color = '#fff';
    }
    if (panelId) panelId.style.display = 'flex';
    if (panelPw) panelPw.style.display = 'none';
  } else {
    if (tabPw) {
      tabPw.style.backgroundColor = 'var(--point-yellow)';
      tabPw.style.color = '#000';
    }
    if (tabId) {
      tabId.style.backgroundColor = '#555';
      tabId.style.color = '#fff';
    }
    if (panelPw) panelPw.style.display = 'flex';
    if (panelId) panelId.style.display = 'none';
  }
};

window.submitFindId = async function() {
  const email = document.getElementById('find-id-email').value.trim();
  const resultBox = document.getElementById('find-id-result');

  if (!email) {
    alert("이메일 주소를 입력해주세요!");
    return;
  }

  if (resultBox) {
    resultBox.style.display = 'none';
    resultBox.innerText = '';
  }

  if (useFirebase) {
    try {
      const snapshot = await db.collection("users").where("email", "==", email).get();
      if (snapshot.empty) {
        alert("해당 이메일로 가입된 아이디를 찾을 수 없습니다.");
        return;
      }
      
      let foundIds = [];
      snapshot.forEach(doc => {
        const data = doc.data();
        if (data.id) foundIds.push(data.id);
      });

      if (resultBox) {
        resultBox.innerText = `조회된 아이디: ${foundIds.join(', ')}`;
        resultBox.style.display = 'block';
      }
    } catch (err) {
      console.error("아이디 찾기 에러:", err);
      alert("조회 중 오류가 발생했습니다: " + err.message);
    }
  } else {
    // 로컬 모드
    const users = JSON.parse(localStorage.getItem('registered_users') || '[]');
    const matched = users.filter(u => u.email === email);

    if (matched.length === 0) {
      alert("해당 이메일로 가입된 아이디를 찾을 수 없습니다. (로컬모드)");
      return;
    }

    const foundIds = matched.map(u => u.id);
    if (resultBox) {
      resultBox.innerText = `(로컬) 조회된 아이디: ${foundIds.join(', ')}`;
      resultBox.style.display = 'block';
    }
  }
};

window.submitResetPassword = async function() {
  const id = document.getElementById('find-pw-id').value.trim();
  const email = document.getElementById('find-pw-email').value.trim();

  if (!id || !email) {
    alert("아이디와 이메일 주소를 모두 입력해주세요!");
    return;
  }

  if (useFirebase) {
    try {
      // 1. 유효성 검사 (아이디와 이메일이 매핑되는지 확인)
      const doc = await db.collection("users").doc(id).get();
      if (!doc.exists) {
        alert("입력하신 정보가 등록된 내용과 일치하지 않습니다.");
        return;
      }

      const userData = doc.data();
      if (userData.email !== email) {
        alert("입력하신 정보가 등록된 내용과 일치하지 않습니다.");
        return;
      }

      // 2. 패스워드 리셋 메일 전송
      await auth.sendPasswordResetEmail(email);
      alert("비밀번호 재설정 이메일이 발송되었습니다!\n\n받으신 이메일의 링크를 통해 새 비밀번호를 설정해 주세요.");
      window.closeFindAccountModal();
    } catch (err) {
      console.error("비밀번호 재설정 요청 에러:", err);
      alert("요청 중 오류가 발생했습니다: " + err.message);
    }
  } else {
    // 로컬 모드
    const users = JSON.parse(localStorage.getItem('registered_users') || '[]');
    const matched = users.find(u => u.id === id && u.email === email);

    if (!matched) {
      alert("입력하신 정보가 등록된 내용과 일치하지 않습니다. (로컬모드)");
      return;
    }

    alert(`[로컬모드 확인]\n요청하신 계정(${id})의 비밀번호는 [ ${matched.pw} ] 입니다.`);
    window.closeFindAccountModal();
  }
};

// ==========================================
// [우상단 플로팅 컨트롤 (음소거 및 전체화면) 기능]
// ==========================================

// 1. 전체화면 토글 함수
window.toggleFullscreen = function() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.warn(`전체화면 활성화 실패: ${err.message}`);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

// 2. 음소거 토글 함수
window.toggleMute = function() {
  const isMuted = localStorage.getItem('app_audio_muted') === 'true';
  const newMuted = !isMuted;
  localStorage.setItem('app_audio_muted', newMuted);
  window.updateMuteButton(newMuted);
};

// 3. 음소거 버튼 UI 업데이트
window.updateMuteButton = function(isMuted) {
  const btn = document.getElementById('btn-toggle-mute');
  if (btn) {
    btn.innerText = isMuted ? '🔇' : '🔊';
    btn.style.backgroundColor = isMuted ? '#555' : '#2a2a2a';
    btn.title = isMuted ? '음소거 해제' : '음소거 하기';
  }

  // BGM 음소거 반응형 제어
  if (isMuted) {
    if (introBGM) {
      try {
        introBGM.pause();
      } catch (e) {}
    }
  } else {
    // 현재 로그인 화면에 머물러 있는 상태에서 음소거 해제 시 다시 BGM 재생
    const loginView = document.getElementById('view-login');
    if (loginView && loginView.classList.contains('active')) {
      window.playIntroBGM();
    }
  }
};

// 4. AudioContext 몽키패칭 (부모 및 iframe 공통)
// destination으로 가는 연결을 차단하여 무음 처리
function patchAudioNode(win) {
  try {
    if (!win) return;
    const OriginalAudioContext = win.AudioContext || win.webkitAudioContext;
    if (OriginalAudioContext && !win.AudioNode.prototype.__patched) {
      const originalConnect = win.AudioNode.prototype.connect;
      win.AudioNode.prototype.connect = function(destination) {
        const isMuted = localStorage.getItem('app_audio_muted') === 'true';
        if (isMuted && destination && (destination === this.context.destination)) {
          // destination에 연결하지 않음으로써 음소거
          return destination;
        }
        return originalConnect.apply(this, arguments);
      };
      win.AudioNode.prototype.__patched = true;
    }
  } catch (e) {
    console.warn("AudioContext 패치 적용 중 오류:", e);
  }
}

// 부모 창 패치 적용
patchAudioNode(window);

// =========================================
// [커스텀 알림(Alert) 모달 및 큐 관리]
// =========================================
const alertQueue = [];
let isAlertActive = false;

// 오리지널 alert 백업
window.originalAlert = window.originalAlert || window.alert;

window.alert = function(message, callback, imageSrc) {
  alertQueue.push({ message, callback, imageSrc });
  processAlertQueue();
};

function processAlertQueue() {
  if (isAlertActive || alertQueue.length === 0) return;
  isAlertActive = true;
  
  const current = alertQueue.shift();
  const modal = document.getElementById('custom-alert-modal');
  const msgEl = document.getElementById('custom-alert-message');
  const okBtn = document.getElementById('custom-alert-ok-btn');
  const badgeContainer = document.getElementById('custom-alert-badge-container');
  const badgeImg = document.getElementById('custom-alert-badge-img');
  
  if (modal && msgEl && okBtn) {
    msgEl.innerText = current.message;
    
    // 뱃지 이미지 처리
    if (badgeContainer && badgeImg && current.imageSrc) {
      badgeImg.src = current.imageSrc;
      badgeContainer.style.display = 'flex';
    } else if (badgeContainer) {
      badgeContainer.style.display = 'none';
      badgeImg.src = '';
    }
    
    modal.style.display = 'flex';
    
    okBtn.onclick = function() {
      modal.style.display = 'none';
      isAlertActive = false;
      if (current.callback) {
        try { current.callback(); } catch (e) { console.error("Alert callback error:", e); }
      }
      processAlertQueue();
    };
  } else {
    console.warn("Custom alert modal element not found. Fallback to native alert.");
    if (window.originalAlert) {
      window.originalAlert(current.message);
    } else {
      console.log("ALERT:", current.message);
    }
    isAlertActive = false;
    if (current.callback) {
      try { current.callback(); } catch (e) { console.error("Alert callback error:", e); }
    }
    processAlertQueue();
  }
}

// iframe 내부의 alert 호출 가로채기 패치
function patchAlertNode(win) {
  if (!win) return;
  try {
    win.alert = function(message, callback) {
      // 자식 창의 종료 알림(대시보드로 돌아가기)은 띄우지 않고 부모 창에서 일괄 처리
      if (message && message.includes("대시보드로")) {
        if (callback) {
          try { callback(); } catch (e) {}
        }
        return;
      }
      window.alert(message, callback);
    };
  } catch (e) {
    console.warn("Failed to patch alert in iframe window:", e);
  }
}

// 이미지 백그라운드 사전 캐싱(Preload) 리스트 (총 42개 에셋)
const imagesToPreload = [
  'images/car_design.webp',
  'images/cyber_chat.webp',
  'images/cyber_healed.webp',
  'images/cyber_junwoo.webp',
  'images/cyber_minsu.webp',
  'images/ending_friends.webp',
  'images/ethics_act1_article.webp',
  'images/ethics_act2_photo1.webp',
  'images/ethics_act2_photo2.webp',
  'images/ethics_act2_photo3.webp',
  'images/game_doyun_cut1.webp',
  'images/game_doyun_cut2.webp',
  'images/game_doyun_cut3.webp',
  'images/icon_comm.webp',
  'images/icon_conflict.webp',
  'images/icon_emotion.webp',
  'images/icon_empathy.webp',
  'images/icon_esteem.webp',
  'images/icon_ethics.webp',
  'images/icon_selfcontrol.webp',
  'images/icon_violence.webp',
  'images/junwoo_sorry.webp',
  'images/login_bg.webp',
  'images/lonely_jisu.webp',
  'images/maeumon.webp',
  'images/maeumon_intro.webp',
  'images/maeumon_outro.webp',
  'images/maratang.webp',
  'images/minsu_smile.webp',
  'images/sheep_farm.webp',
  'images/shorts_sua_cut1.webp',
  'images/shorts_sua_cut2.webp',
  'images/shorts_sua_cut3.webp',
  'images/shorts_sua_success.webp',
  'images/story_bg1.webp',
  'images/story_bg2.webp',
  'images/story_bg3.webp',
  'images/story_bg4.webp',
  'images/story_bg5.webp',
  'images/story_bg6.webp',
  'images/story_bg7.webp',
  'images/theme_park_jieun.webp'
];

function preloadProjectImages() {
  // 브라우저 백그라운드 스레드에서 유휴 상태일 때 로드하여 캐싱 수행
  if (window.requestIdleCallback) {
    window.requestIdleCallback(() => {
      imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    });
  } else {
    setTimeout(() => {
      imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }, 100);
  }
}

// 5. 초기화 및 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', () => {
  // 이미지 사전 로드 실행
  preloadProjectImages();

  // 초기 음소거 상태 반영
  const isMuted = localStorage.getItem('app_audio_muted') === 'true';
  window.updateMuteButton(isMuted);

  // 계속하려면 아무 키나 누르십시오 (PRESS ANY BUTTON) 처리
  const handlePressAnyKey = (e) => {
    // 스페이스바 누를 시 스크롤 방지
    if (e && e.key === ' ') e.preventDefault();

    document.removeEventListener('keydown', handlePressAnyKey);
    document.removeEventListener('click', handlePressAnyKey);

    const pressAny = document.getElementById('login-press-anykey');
    const loginSelect = document.getElementById('login-mode-select');
    const loginFooter = document.getElementById('login-footer');

    if (pressAny) pressAny.style.display = 'none';
    if (loginSelect) loginSelect.style.display = 'flex';
    if (loginFooter) loginFooter.style.display = 'block';

    // 레트로 오디오 효과음 재생 및 배경음악 시작
    try {
      const currentMuteState = localStorage.getItem('app_audio_muted') === 'true';
      if (!currentMuteState) {
        const audio = new Audio('sound/인트로 오프닝.mp3');
        audio.volume = 0.5;
        audio.play();
        
        // 배경 음악 시작
        window.playIntroBGM();
      }
    } catch (err) {
      console.warn("오디오 효과음/BGM 재생 실패:", err);
    }
  };

  document.addEventListener('keydown', handlePressAnyKey);
  document.addEventListener('click', handlePressAnyKey);

  // 전체화면 상태 변경 감지 및 버튼 UI 동기화
  document.addEventListener('fullscreenchange', () => {
    const btn = document.getElementById('btn-toggle-fullscreen');
    if (btn) {
      if (document.fullscreenElement) {
        btn.innerText = '🗗';
        btn.title = '전체화면 종료';
      } else {
        btn.innerText = '⛶';
        btn.title = '전체화면 하기';
      }
    }
  });

  // iframe 로드 시 자식 창에 패치 적용
  const iframe = document.getElementById('task-iframe');
  if (iframe) {
    iframe.addEventListener('load', () => {
      try {
        if (iframe.contentWindow) {
          patchAudioNode(iframe.contentWindow);
          patchAlertNode(iframe.contentWindow);
        }
      } catch (e) {
        console.warn("자식 iframe 패치 적용 실패 (도메인 제한 등):", e);
      }
    });
  }
});

// 전역 키보드 제어 (방향키 및 스페이스바/엔터키로 인트로/아웃트로 대사 진행 및 이전 이동)
window.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
    return;
  }
  const viewPrologue = document.getElementById('view-prologue');
  const viewOutro = document.getElementById('view-outro');

  if (viewPrologue && viewPrologue.classList.contains('active')) {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
      const nextBtn = document.getElementById('next-btn');
      if (nextBtn && nextBtn.style.display !== 'none') {
        e.preventDefault();
        nextBtn.click();
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
      const prevBtn = document.getElementById('prev-btn');
      if (prevBtn && prevBtn.style.display !== 'none') {
        e.preventDefault();
        prevBtn.click();
      }
    }
  } else if (viewOutro && viewOutro.classList.contains('active')) {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
      const nextBtn = document.getElementById('outro-dialog-next');
      const promiseBtn = document.getElementById('outro-promise-btn');
      if (nextBtn && nextBtn.style.display !== 'none') {
        e.preventDefault();
        nextBtn.click();
      } else if (promiseBtn && promiseBtn.style.display !== 'none') {
        e.preventDefault();
        promiseBtn.click();
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
      const prevBtn = document.getElementById('outro-dialog-prev');
      if (prevBtn && prevBtn.style.display !== 'none') {
        e.preventDefault();
        prevBtn.click();
      }
    }
  }
});

// ==========================================
// [사이버 어울림 약속 관련 모달 및 실시간 연동 기능]
// ==========================================
let cyberPromiseUnsubscribe = null;

window.showCyberPromiseModal = function() {
  const modal = document.getElementById('cyber-promise-modal');
  if (!modal) return;
  
  modal.style.display = 'flex';
  
  // UI 상태 초기화
  document.getElementById('promise-step-write').style.display = 'flex';
  document.getElementById('promise-step-sign').style.display = 'none';
  document.getElementById('promise-step-complete').style.display = 'none';
  
  document.getElementById('promise-input').value = "";
  document.getElementById('promise-name-input').value = "";
  document.getElementById('promise-signature-display').style.display = 'none';
  
  // 실시간 구독 시작
  startCyberPromiseListener();
};

function startCyberPromiseListener() {
  const classCode = window.appState.classCode;
  if (!classCode) return;
  
  if (!useFirebase || classCode === "test_class") {
    loadMockCyberPromises();
    return;
  }
  
  if (cyberPromiseUnsubscribe) {
    cyberPromiseUnsubscribe();
    cyberPromiseUnsubscribe = null;
  }
  
  try {
    cyberPromiseUnsubscribe = db.collection("students")
      .where("classCode", "==", classCode)
      .onSnapshot((snapshot) => {
        const promises = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          const appState = data.appState || {};
          const answers = appState.taskAnswers || {};
          const promiseData = answers["사이버 어울림 약속"] || {};
          const text = promiseData["약속 내용"];
          const name = promiseData["서명 이름"];
          if (text) {
            promises.push({
              id: doc.id,
              sender: name || data.studentName || data.studentId || "친구",
              text: text,
              isSigned: !!name
            });
          }
        });
        renderCyberPromiseBoard(promises);
      }, (error) => {
        console.error("사이버 약속 구독 에러, 가상 데이터 로딩:", error);
        loadMockCyberPromises();
      });
  } catch (err) {
    console.error("리스너 등록 실패, 가상 데이터 로딩:", err);
    loadMockCyberPromises();
  }
}

function renderCyberPromiseBoard(promises) {
  const container = document.getElementById('promise-board-list');
  if (!container) return;
  
  if (promises.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #8a99ad; padding: 40px 10px; text-align: center;">
        <span style="font-size: 2rem; margin-bottom: 5px;">🤝</span>
        <span>우리 반 첫 번째 어울림 약속을 남겨보세요!</span>
      </div>
    `;
    return;
  }
  
  container.innerHTML = "";
  promises.forEach(p => {
    const card = document.createElement('div');
    card.style.background = "#1a2a42";
    card.style.border = "2px solid #000";
    card.style.padding = "10px";
    card.style.position = "relative";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.justifyContent = "space-between";
    card.style.boxShadow = "3px 3px 0 #000";
    
    let badgeHtml = "";
    if (p.isSigned) {
      badgeHtml = `<span style="background: #00ff88; color: #000; font-size: 0.75rem; padding: 2px 5px; font-weight: bold; border: 1px solid #000; border-radius: 2px; position: absolute; top: -8px; right: 5px; box-shadow: 2px 2px 0 #000;">서약완료</span>`;
    }
    
    card.innerHTML = `
      ${badgeHtml}
      <div style="font-size: 0.95rem; color: #fff; line-height: 1.4; word-break: break-all; margin-bottom: 8px;">
        " 나는 <span style="color: var(--point-yellow); font-weight: bold;">${p.text}</span>(을)를 실천하겠습니다. "
      </div>
      <div style="font-size: 0.85rem; color: #50e3c2; font-weight: bold; text-align: right; border-top: 1px dashed #334e68; padding-top: 4px; margin-top: auto;">
        👤 약속자: ${p.sender}
      </div>
    `;
    container.appendChild(card);
  });
}

window.submitCyberPromise = function() {
  const promiseInput = document.getElementById('promise-input');
  if (!promiseInput) return;
  
  const val = promiseInput.value.trim();
  if (!val) {
    alert("사이버 공간에서 실천할 약속 내용을 입력해주세요!");
    return;
  }
  
  if (!window.appState.taskAnswers) window.appState.taskAnswers = {};
  if (!window.appState.taskAnswers["사이버 어울림 약속"]) window.appState.taskAnswers["사이버 어울림 약속"] = {};
  
  window.appState.taskAnswers["사이버 어울림 약속"]["약속 내용"] = val;
  
  if (!window.appState.completedTasks.includes("사이버 어울림 약속")) {
    window.appState.completedTasks.push("사이버 어울림 약속");
  }
  
  saveLocalState();
  
  // UI 단계 이동: 서명 입력 열기
  document.getElementById('promise-step-write').style.display = 'none';
  document.getElementById('promise-step-sign').style.display = 'flex';
  
  // 만약 오프라인/가상모드라면 즉시 보드에 내 답변 반영
  const classCode = window.appState.classCode;
  if (!useFirebase || classCode === "test_class") {
    loadMockCyberPromises();
  }
};

window.submitCyberPledgeSign = function() {
  const nameInput = document.getElementById('promise-name-input');
  if (!nameInput) return;
  
  const val = nameInput.value.trim();
  if (!val) {
    alert("서약서에 서명할 이름을 입력해주세요!");
    return;
  }
  
  if (!window.appState.taskAnswers["사이버 어울림 약속"]) {
    window.appState.taskAnswers["사이버 어울림 약속"] = {};
  }
  window.appState.taskAnswers["사이버 어울림 약속"]["서명 이름"] = val;
  
  saveLocalState();
  
  // 서명 완료 화면 업데이트
  document.getElementById('promise-signature-name').innerText = val;
  document.getElementById('promise-signature-display').style.display = 'block';
  
  // UI 단계 이동: 완료 제어 열기
  document.getElementById('promise-step-sign').style.display = 'none';
  document.getElementById('promise-step-complete').style.display = 'flex';
  
  // 만약 오프라인/가상모드라면 내 서명까지 포함하여 보드 다시 렌더링
  const classCode = window.appState.classCode;
  if (!useFirebase || classCode === "test_class") {
    loadMockCyberPromises();
  }
};

window.captureAndDownloadPromise = function() {
  const captureArea = document.getElementById('promise-capture-area');
  const boardList = document.getElementById('promise-board-list');
  if (!captureArea) return;
  
  // html2canvas가 숨겨지거나 스크롤되는 영역을 다 캡처하기 위해 스타일 임시 변경 (부모 및 자식 스크롤 영역 모두 해제)
  const originalMaxHeight = captureArea.style.maxHeight;
  const originalOverflowY = captureArea.style.overflowY;
  
  let originalBoardMaxHeight = '';
  let originalBoardOverflowY = '';
  if (boardList) {
    originalBoardMaxHeight = boardList.style.maxHeight;
    originalBoardOverflowY = boardList.style.overflowY;
    boardList.style.maxHeight = 'none';
    boardList.style.overflowY = 'visible';
  }
  
  captureArea.style.maxHeight = 'none';
  captureArea.style.overflowY = 'visible';
  
  html2canvas(captureArea, {
    backgroundColor: '#111d2e',
    scale: 2,
    useCORS: true
  }).then(canvas => {
    // 스타일 복원
    captureArea.style.maxHeight = originalMaxHeight;
    captureArea.style.overflowY = originalOverflowY;
    if (boardList) {
      boardList.style.maxHeight = originalBoardMaxHeight;
      boardList.style.overflowY = originalBoardOverflowY;
    }
    
    const link = document.createElement('a');
    const myName = (window.appState.taskAnswers["사이버 어울림 약속"] && window.appState.taskAnswers["사이버 어울림 약속"]["서명 이름"]) 
      || window.appState.studentName 
      || '학생';
    link.download = `우리반_사이버_어울림_약속_${myName}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    
    alert("📸 우리반 사이버 어울림 약속 이미지 저장이 완료되었습니다!");
  }).catch(err => {
    console.error("약속판 캡처 오류:", err);
    // 스타일 복원
    captureArea.style.maxHeight = originalMaxHeight;
    captureArea.style.overflowY = originalOverflowY;
    if (boardList) {
      boardList.style.maxHeight = originalBoardMaxHeight;
      boardList.style.overflowY = originalBoardOverflowY;
    }
    alert("이미지 저장에 실패했습니다. 다시 시도해 주세요.");
  });
};

window.completeCyberPromiseFlow = function() {
  // 모달 닫기
  const modal = document.getElementById('cyber-promise-modal');
  if (modal) modal.style.display = 'none';
  
  // Firestore 실시간 리스너 해제
  if (cyberPromiseUnsubscribe) {
    cyberPromiseUnsubscribe();
    cyberPromiseUnsubscribe = null;
  }
  
  // 원래 소용돌이 연출 진행 후 아웃트로 교실 씬 전환
  proceedOriginalPromiseFlow();
};

function loadMockCyberPromises() {
  const myPromise = (window.appState.taskAnswers && window.appState.taskAnswers["사이버 어울림 약속"]) || {};
  const promises = [
    { sender: "김지민", text: "상처를 주는 무심한 단답 대신 정성스럽게 답장하기", isSigned: true },
    { sender: "이도윤", text: "인터넷에 퍼진 정보나 소문은 반드시 사실인지 먼저 확인해보기", isSigned: true },
    { sender: "최예은", text: "상대방의 입장에서 생각하며 따뜻하게 공감해주는 선플 쓰기", isSigned: true }
  ];
  
  if (myPromise["약속 내용"]) {
    promises.unshift({
      sender: myPromise["서명 이름"] || window.appState.studentName || window.appState.studentId || "나",
      text: myPromise["약속 내용"],
      isSigned: !!myPromise["서명 이름"]
    });
  }
  renderCyberPromiseBoard(promises);
}

// 버튼 클릭/터치 시 playSelect 효과음 적용
(function() {
  let lastButtonSoundTime = 0;
  document.addEventListener('click', (e) => {
    const target = e.target.closest('button, .retro-btn, .std-footer-btn-left, .std-footer-btn-right, input[type="button"], input[type="submit"]');
    if (target) {
      const now = Date.now();
      if (now - lastButtonSoundTime < 120) return; // 120ms 중복 방지
      lastButtonSoundTime = now;
      try {
        const isMuted = localStorage.getItem('app_audio_muted') === 'true';
        if (!isMuted) {
          const audio = new Audio('sound/playSelect.mp3');
          audio.volume = 0.5;
          audio.play().catch(() => {});
        }
      } catch (err) {}
    }
  });
})();
