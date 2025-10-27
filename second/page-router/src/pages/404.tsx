import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/NotFound.module.css";

function NotFound() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [router]);

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className={`${styles.container} ${mounted ? styles.mounted : ""}`}>
      <div className={styles.background}>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={styles.star}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.errorCode}>
          <span className={styles.digit}>4</span>
          <div className={styles.astronaut}>
            <div className={styles.astronautBody}>
              <div className={styles.helmet}>
                <div className={styles.glass}></div>
                <div className={styles.reflection}></div>
              </div>
            </div>
          </div>
          <span className={styles.digit}>4</span>
        </div>

        <h1 className={styles.title}>페이지를 찾을 수 없습니다</h1>
        <p className={styles.description}>
          앗! 우주 미아가 되셨군요. 🚀
          <br />
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>

        <div className={styles.actions}>
          <button onClick={handleGoHome} className={styles.primaryButton}>
            <span className={styles.buttonIcon}>🏠</span>
            홈으로 돌아가기
          </button>
          <button
            onClick={() => router.back()}
            className={styles.secondaryButton}
          >
            <span className={styles.buttonIcon}>←</span>
            이전 페이지
          </button>
        </div>

        <div className={styles.countdown}>
          <p>{countdown}초 후 자동으로 홈으로 이동합니다</p>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${(countdown / 10) * 100}%` }}
            />
          </div>
        </div>
      </div>
      <div className={styles.planets}>
        <div
          className={styles.planet}
          style={{ top: "20%", left: "10%" }}
        ></div>
        <div
          className={styles.planet}
          style={{ top: "60%", right: "15%" }}
        ></div>
        <div
          className={styles.planet}
          style={{ bottom: "10%", left: "20%" }}
        ></div>
      </div>
    </div>
  );
}

export default NotFound;
