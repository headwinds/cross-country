import React, { useState } from "react";
import styles from "./calendar.module.css";
import clsx from "clsx";
import { Column, Row, Label } from "../../";
import {
  abbrDays,
  months,
  getDaysFromPreviousMonth,
  getDaysFromNextMonth,
} from "./calendar-util";

const AbbrDay = ({ day, key }) => {
  return (
    <div key={key} className={styles.calendarAbbrDay}>
      {day}
    </div>
  );
};

const Day = ({ day, key }) => {
  return (
    <div key={key} className={styles.calendarDay}>
      {day}
    </div>
  );
};

const Calendar = ({ isFullGrid = false }) => {
  const currentDate = new Date();
  const currentMonthName = months[currentDate.getMonth()];

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const daysOfWeek = abbrDays.map((abbrDay, index) => {
    return <AbbrDay key={index} day={abbrDay} />;
  });

  // see a few days from previous and next month to fill the grid
  function renderCalendarGrid(currentMonth, currentYear) {
    const daysInCurrentMonth = new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate();
    const daysFromPreviousMonth = getDaysFromPreviousMonth(
      currentMonth,
      currentYear
    );
    const daysFromNextMonth = getDaysFromNextMonth(
      daysFromPreviousMonth,
      daysInCurrentMonth
    );

    const calendarDays = [
      ...daysFromPreviousMonth,
      ...Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1),
      ...daysFromNextMonth,
    ];

    return (
      <Column customClass={styles.calendarGrid}>
        {calendarDays.map((day, index) => (
          <Day key={index} day={day} />
        ))}
      </Column>
    );
  }

  const renderSingleMonth = () => {
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className={clsx(styles.calendarDay, styles.empty)}
        ></div>
      );
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(<Day key={i} day={i} />);
    }

    return <Column customClass={styles.calendarGrid}>{days}</Column>;
  };

  const month = isFullGrid
    ? renderCalendarGrid(currentMonth, currentYear)
    : renderSingleMonth();

  return (
    <Column>
      <Row>
        <Label>{currentMonthName}</Label>
      </Row>
      <Row>
        <Column customClass={styles.daysOfWeekGrid}>{daysOfWeek}</Column>
      </Row>
      <Row>{month}</Row>
    </Column>
  );
};

export default Calendar;
