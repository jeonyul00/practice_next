# practice_next 프로젝트

이 프로젝트는 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)을 기반으로 시작한 Next.js 학습용 프로젝트입니다.
다양한 최신 기술 스택을 실험적으로 도입해보았으며, 그 내용을 아래에 정리했습니다.

## 사용 기술 스택

### 프레임워크 및 런타임

- **Next.js 15**: App Router 기반 구조, Server Actions, Metadata API 등 최신 기능 활용
- **React 19**: 최신 React 기능 사용
- **TypeScript**: 타입 안정성 보장
- **Bun**: 빠른 실행 및 dev 환경 구성 (`bun run` 활용)

### UI 라이브러리 및 디자인

- **Radix UI**: 접근성 좋은 UI 컴포넌트 모음 (Dialog, Tooltip, Select 등 대부분 사용)
- **tailwindcss**: 유틸리티 퍼스트 CSS 프레임워크
- **tailwindcss-animate**: 애니메이션 유틸리티 확장
- **lucide-react**: 아이콘 라이브러리
- **clsx / class-variance-authority**: 조건부 클래스 조합 및 컴포넌트 스타일 관리
- **vaul**: Bottom Sheet UI 구현

### 폼 및 검증

- **react-hook-form**: 선언형 폼 구성
- **zod**: 스키마 기반 폼 검증
- **@hookform/resolvers**: `zod`를 `react-hook-form`과 연결
- **input-otp**: OTP 입력 필드 구성

### 인증 및 사용자 관리

- **Clerk**: 사용자 인증 및 세션 관리 (`@clerk/nextjs`)
- **웹훅 처리**: Clerk의 user.created / user.deleted 이벤트 처리
- **Svix**: Clerk 웹훅 수신 처리 도구
- **Ngrok**: Clerk 웹훅 로컬 테스트를 위한 공개 URL 생성 (`dev:webhook` 스크립트에 적용)

### DB 및 ORM

- **Drizzle ORM**: 타입 안전한 SQL 기반 ORM
- **@neondatabase/serverless**: Serverless 환경용 PostgreSQL (Neon)
- **drizzle-kit**: 스키마 기반 마이그레이션 도구

### 차트 및 데이터 시각화

- **recharts**: 대시보드용 차트 구성 (막대, 파이 등)

### 기타 유틸

- **dotenv**: 환경변수 설정
- **concurrently**: 여러 dev 서버 동시 실행 (webhook + app)
- **date-fns**: 날짜 처리
- **cmdk**: 커맨드 팔레트 구현
- **react-resizable-panels**: 패널 리사이징 기능 구현

## 스크립트

```json
"dev": "next dev",
"dev:webhook": "ngrok http --url=darling-deer-concise.ngrok-free.app 3000",
"dev:all": "concurrently \"bun run dev:webhook\" \"bun run dev\"",
"build": "next build",
"start": "next start",
"lint": "next lint"
```

## 개발 환경 세팅

```bash
bun install
bun run dev:all # ngrok + next 동시 실행
```

## 폴더 구조 특징

- `app/`: Next.js App Router 기반 구조 (page.tsx, layout.tsx 등 포함)
- `components/`: 공통 UI 컴포넌트 분리
- `db/`: Drizzle ORM 관련 스키마 정의
- `lib/`: 유틸 함수 및 외부 API 연동

## 기능 요약

- Clerk 로그인 / 회원가입 / 세션 유지
- Clerk 웹훅 기반 DB 자동 동기화
- OTP 기반 인증 입력
- Radix 기반 다이얼로그/모달/토스트 UI
- React Hook Form + Zod 기반 폼 검증
- Drizzle ORM + Neon 기반 유저 저장/삭제
- 커맨드 팔레트, 차트, 탭 등 고급 UI 시도

## 향후 개선 계획

- CI/CD 설정 (Vercel 자동 배포)
- 테스팅 도입 (Playwright, Vitest 등)
- SEO 메타데이터 자동 구성
- 다국어(i18n) 지원

## 참고 문서

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Clerk Docs](https://clerk.com/docs)
- [Drizzle ORM Docs](https://orm.drizzle.team/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Radix UI Docs](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [Zod Docs](https://zod.dev/)

---

추후 기능이 추가되면 계속 업데이트 예정입니다.
