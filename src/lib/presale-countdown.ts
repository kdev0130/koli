export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const DEFAULT_PRESALE_RELEASE_DATE_ISO = "2026-01-30T00:00:00Z";

const getDefaultTargetDate = (): Date => {
  const releaseDate = new Date(DEFAULT_PRESALE_RELEASE_DATE_ISO);
  const targetDate = new Date(releaseDate.getTime());
  targetDate.setUTCMonth(targetDate.getUTCMonth() + 4);
  return targetDate;
};

const getTargetDate = (): Date => {
  const configuredDate = import.meta.env.VITE_PRESALE_TARGET_DATE;
  const parsedConfiguredDate = configuredDate ? new Date(configuredDate) : null;

  if (parsedConfiguredDate && !Number.isNaN(parsedConfiguredDate.getTime())) {
    return parsedConfiguredDate;
  }

  return getDefaultTargetDate();
};

export const getPresaleTargetTimestamp = (): number => getTargetDate().getTime();

export const calculateTimeLeft = (targetTimestamp: number): TimeLeft => {
  const difference = targetTimestamp - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};
