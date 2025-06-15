import {
  calculateAge,
  calculateOvertime,
  calculatePeriod,
  checkTimeRange,
  getHollidays,
  getSchedules,
  isInTime,
  splitDateRange,
  subtractTimeObjects,
} from "../src";

describe("Helper Functions", () => {
  test("calculateAge - less than year", () => {
    const start = new Date(2022, 6, 7);
    const end = new Date(2023, 11, 31);

    const oneYear = calculateAge(start, end);

    expect(24).toBe(oneYear.days);
    expect(5).toBe(oneYear.months);
    expect(1).toBe(oneYear.years);
  });

  test("calculateAge - Checks one year", () => {
    const start = new Date(2022, 0, 3);
    const end = new Date(2023, 0, 3);

    const oneYear = calculateAge(start, end);

    expect(oneYear.days).toBe(0);
    expect(oneYear.months).toBe(0);
    expect(oneYear.years).toBe(1);
  });

  test("calculate working time - normal/extended", () => {
    const normalStart = "2023-06-15T08:30:00Z";
    const normalEnd = "2023-06-15T17:30:00Z";
    const normalBasePeriod = 9 * 60; // 9 hours

    const normalCalulation = calculatePeriod({
      start: normalStart,
      end: normalEnd,
      basePeriodMinutes: normalBasePeriod,
    });

    expect(normalCalulation.hours).toBe(9);
    expect(normalCalulation.minutes).toBe(0);
    expect(normalCalulation.hoursExtended).toBe(0);
    expect(normalCalulation.minutesExtended).toBe(0);

    // extended
    const extendedStart = "2023-06-15T08:30:00Z";
    const extendedEnd = "2023-06-15T17:45:00Z";
    const extendedBasePeriod = 9 * 60; // 9 hours

    const extendedCalculation = calculatePeriod({
      start: extendedStart,
      end: extendedEnd,
      basePeriodMinutes: extendedBasePeriod,
    });

    expect(extendedCalculation.hours).toBe(9);
    expect(extendedCalculation.minutes).toBe(0);
    expect(extendedCalculation.hoursExtended).toBe(0);
    expect(extendedCalculation.minutesExtended).toBe(15);
    expect(extendedCalculation.totalHours).toBe(9);
    expect(extendedCalculation.totalMinutes).toBe(15);
  });

  test("calculate working time - use only minutes as precision", () => {
    const normalStart = "2023-06-15T11:30:02.000Z";
    const normalEnd = "2023-06-15T21:09:00.000Z";
    const normalBasePeriod = 9 * 60; // 9 hours

    const normalCalulation = calculatePeriod({
      start: normalStart,
      end: normalEnd,
      basePeriodMinutes: normalBasePeriod,
    });

    expect(normalCalulation.hours).toBe(9);
    expect(normalCalulation.minutes).toBe(0);
    expect(normalCalulation.hoursExtended).toBe(0);
    expect(normalCalulation.minutesExtended).toBe(39);
    expect(normalCalulation.totalHours).toBe(9);
    expect(normalCalulation.totalMinutes).toBe(39);
  });

  test("calculate lunch time - normal", () => {
    const start = "2023-06-15T13:00:00Z";
    const end = "2023-06-15T13:30:00Z";
    const lunchBasePeriod = 30; // 30 min

    const calulation = calculatePeriod({
      start,
      end,
      basePeriodMinutes: lunchBasePeriod,
    });

    expect(calulation.hours).toBe(0);
    expect(calulation.minutes).toBe(30);
    expect(calulation.hoursExtended).toBe(0);
    expect(calulation.minutesExtended).toBe(0);
  });

  test("calculate lunch time - extended", () => {
    const start = "2023-06-15T13:00:00Z";
    const end = "2023-06-15T13:45:00Z";
    const lunchBasePeriod = 30; // 30 min

    const calulation = calculatePeriod({
      start,
      end,
      basePeriodMinutes: lunchBasePeriod,
    });

    expect(calulation.hours).toBe(0);
    expect(calulation.minutes).toBe(30);
    expect(calulation.hoursExtended).toBe(0);
    expect(calulation.minutesExtended).toBe(15);
    expect(calulation.totalHours).toBe(0);
    expect(calulation.totalMinutes).toBe(45);
  });

  test("calculate working time - lunch extended", () => {
    // working time 9 hours 30 minutes
    const workingStart = "2023-06-15T08:30:00Z";
    const workingEnd = "2023-06-15T18:00:00Z";
    const workingBasePeriod = 9 * 60; // 9 hours

    const workingCalulation = calculatePeriod({
      start: workingStart,
      end: workingEnd,
      basePeriodMinutes: workingBasePeriod,
    });

    const lunchStart = "2023-06-15T13:00:00Z";
    const lunchEnd = "2023-06-15T13:45:00Z";
    const lunchBasePeriod = 30; // 30 min

    // lunch time 45 min
    const lunchCalulation = calculatePeriod({
      start: lunchStart,
      end: lunchEnd,
      basePeriodMinutes: lunchBasePeriod,
    });

    const workingHoursExtended =
      workingCalulation.hoursExtended - lunchCalulation.hoursExtended;
    const workingMinutesExtended =
      workingCalulation.minutesExtended - lunchCalulation.minutesExtended;

    expect(workingHoursExtended).toBe(0);
    expect(workingMinutesExtended).toBe(15);
  });

  test("Split dates in custom timezone (two ranges)", () => {
    const timezone = "America/Santiago";
    const start = "2023-06-15T12:30:00.000Z";
    const end = "2023-06-16T04:30:00.000Z";

    const ranges = splitDateRange({ start, end, timezone });

    expect(ranges.length).toBe(2);
    // first range
    expect(ranges[0].start).toEqual("2023-06-15T12:30:00.000Z");
    expect(ranges[0].end).toBe("2023-06-16T03:59:59.999Z");
    // second range
    expect(ranges[1].start).toEqual("2023-06-16T04:00:00.000Z");
    expect(ranges[1].end).toBe("2023-06-16T04:30:00.000Z");
  });

  test("Split dates in custom timezone (split limit)", () => {
    const timezone = "America/Santiago";

    const oneOutput = splitDateRange({
      start: "2023-06-15T12:30:00.000Z",
      end: "2023-06-16T04:00:00.000Z",
      timezone,
    });

    expect(oneOutput.length).toBe(1);
    // first range
    expect(oneOutput[0].start).toEqual("2023-06-15T12:30:00.000Z");
    expect(oneOutput[0].end).toBe("2023-06-16T04:00:00.000Z");

    const twoOutput = splitDateRange({
      start: "2023-06-15T12:30:00.000Z",
      end: "2023-06-16T04:30:00.000Z",
      timezone,
    });
    expect(twoOutput.length).toBe(2);
    // first range
    expect(twoOutput[0].start).toEqual("2023-06-15T12:30:00.000Z");
    expect(twoOutput[0].end).toBe("2023-06-16T03:59:59.999Z");
    //second range
    expect(twoOutput[1].start).toEqual("2023-06-16T04:00:00.000Z");
    expect(twoOutput[1].end).toBe("2023-06-16T04:30:00.000Z");
  });

  test("Calculate overtime - No holliday", () => {
    const overtimeSessions = [
      {
        name: "25",
        type: "overtime",
        dayStart: 1,
        dayEnd: 5,
        time: {
          start: "17:30",
          end: "21:00",
        },
      },
      {
        name: "50",
        type: "overtime",
        dayStart: 1,
        dayEnd: 5,
        time: {
          start: "21:00",
          end: "07:00",
        },
      },
    ];

    const overtime = calculateOvertime(
      {
        start: "2023-06-22T12:30:00.000Z",
        end: "2023-06-23T03:30:00.000Z",
        isWorkingDay: true,
        timezone: "America/Santiago",
      },
      overtimeSessions
    );
    expect(overtime["25"].hours).toBe(3);
    expect(overtime["25"].minutes).toBe(30);
    expect(overtime["25"].start).toBe("2023-06-22T21:30:00.000Z");
    expect(overtime["25"].end).toBe("2023-06-23T01:00:00.000Z");

    expect(overtime["50"].hours).toBe(2);
    expect(overtime["50"].minutes).toBe(30);
    expect(overtime["50"].start).toBe("2023-06-23T01:00:00.000Z");
    expect(overtime["50"].end).toBe("2023-06-23T03:30:00.000Z");
  });

  test("Calculate overtime - No holliday end working time on weekend", () => {
    const overtimeSessions = [
      {
        name: "25",
        type: "overtime",
        dayStart: 1,
        dayEnd: 5,
        time: {
          start: "17:30",
          end: "21:00",
        },
      },
      {
        name: "50",
        type: "overtime",
        dayStart: 1,
        dayEnd: 5,
        time: {
          start: "21:00",
          end: "07:00",
        },
      },
    ];

    const overtime = calculateOvertime(
      {
        start: "2023-06-23T12:30:00.000Z",
        end: "2023-06-24T03:30:00.000Z",
        isWorkingDay: true,
        timezone: "America/Santiago",
      },
      overtimeSessions
    );

    expect(overtime["25"].hours).toBe(3);
    expect(overtime["25"].minutes).toBe(30);

    expect(overtime["50"].hours).toBe(2);
    expect(overtime["50"].minutes).toBe(30);
  });

  test("Calculate overtime - No holliday overflow time", () => {
    const overtimeSessions = [
      {
        name: "25",
        type: "overtime",
        dayStart: 1,
        dayEnd: 5,
        time: {
          start: "17:30",
          end: "21:00",
        },
      },
      {
        name: "50",
        type: "overtime",
        dayStart: 1,
        dayEnd: 5,
        time: {
          start: "00:00",
          end: "06:00",
        },
      },
    ];

    // total interval is 6 hours
    // the output must return 5 hours
    // set by the end of the session
    const overtime = calculateOvertime(
      {
        start: "2023-06-22T05:00:00.000Z",
        end: "2023-06-22T11:00:00.000Z",
        isWorkingDay: true,
        timezone: "America/Santiago",
      },
      overtimeSessions
    );

    expect(overtime["25"].hours).toBe(0);
    expect(overtime["25"].minutes).toBe(0);

    expect(overtime["50"].hours).toBe(5);
    expect(overtime["50"].minutes).toBe(0);
  });

  test("Calculate overtime - Holliday", () => {
    const overtimeSessions = [
      {
        name: "overtime",
        type: "25",
        dayStart: 1,
        dayEnd: 5,
        time: {
          start: "17:30",
          end: "21:00",
        },
      },
      {
        name: "overtime",
        type: "50",
        dayStart: 1,
        dayEnd: 5,
        time: {
          start: "21:00",
          end: "07:00",
        },
      },
    ];

    // 0 hours at 25%
    // 6 hours at 50%
    const start = "2023-06-15T22:00:00.000Z";
    const end = "2023-06-16T04:00:00.000Z";
    const timezone = "America/Santiago";

    const overtime = calculateOvertime(
      { start, end, isWorkingDay: false, timezone },
      overtimeSessions
    );

    expect(overtime["25"].hours).toBe(0);
    expect(overtime["25"].minutes).toBe(0);
    expect(overtime["25"].start).toBe("2023-06-15T22:00:00.000Z");
    expect(overtime["25"].end).toBe("2023-06-16T04:00:00.000Z");

    expect(overtime["50"].hours).toBe(6);
    expect(overtime["50"].minutes).toBe(0);
    expect(overtime["50"].start).toBe("2023-06-15T22:00:00.000Z");
    expect(overtime["50"].end).toBe("2023-06-16T04:00:00.000Z");
  });

  test("Calculate subtraction", () => {
    let time1 = {
      hours: 5,
      minutes: 0,
      start: "2023-06-15T01:00:00.000Z",
      end: "2023-06-15T05:00:00.000Z",
    };
    let time2 = { hours: 0, minutes: 15 };

    const subtract = subtractTimeObjects(time1, time2);

    expect(subtract.hours).toBe(4);
    expect(subtract.minutes).toBe(45);
    expect(subtract.start).toBe("2023-06-15T01:00:00.000Z");
    expect(subtract.end).toBe("2023-06-15T04:45:00.000Z");
  });

  test("Calculate subtraction - check remain", () => {
    let time1 = {
      hours: 5,
      minutes: 0,
      start: "2023-06-15T01:00:00.000Z",
      end: "2023-06-15T05:00:00.000Z",
    };
    let time2 = { hours: 6, minutes: 15 };

    const subtract = subtractTimeObjects(time1, time2);

    expect(subtract.hours).toBe(0);
    expect(subtract.minutes).toBe(0);
    expect(subtract.remain.minutes).toBe(15);
    expect(subtract.remain.minutes).toBe(15);
  });

  test("dates on range", () => {
    const data = {
      start: "2023-11-29T17:22:44.000+00:00",
      end: "2023-11-29T18:00:02.000+00:00",
    };
    const session = { start: "13:00", end: "15:00" };

    const onTime = checkTimeRange(data, session, "America/Santiago");

    expect(onTime).toBe(true);
  });

  test("dates on range (equal time)", () => {
    const data = {
      start: "2023-06-28T12:30:00.000Z",
      end: "2023-06-28T21:30:00.000Z",
    };
    const session = { start: "08:00", end: "17:30" };

    const onTime = checkTimeRange(data, session, "America/Santiago");

    expect(onTime).toBe(true);
  });

  test("start date out of range", () => {
    const data = {
      start: "2023-06-28T07:00:00.000Z",
      end: "2023-06-28T08:30:00.000Z",
    };
    const session = { start: "08:30", end: "08:30" };

    const onTime = checkTimeRange(data, session, "America/Santiago");

    expect(onTime).toBe(false);
  });

  test("end date out of range", () => {
    const data = {
      start: "2023-06-28T12:00:00.000Z",
      end: "2023-06-28T22:30:00.000Z",
    };
    const session = { start: "08:00", end: "08:30" };

    const onTime = checkTimeRange(data, session, "America/Santiago");

    expect(onTime).toBe(false);
  });

  test("isInTime - before checks", () => {
    const data = "2023-06-16T08:30:00Z";

    const inTime = isInTime(data, "08:40", "before", "America/Santiago");
    const inTimeEqual = isInTime(data, "08:30", "before", "America/Santiago");
    const offTime = isInTime(data, "08:00", "before", "America/Santiago");

    expect(inTime).toBe(true);
    expect(inTimeEqual).toBe(true);
    expect(offTime).toBe(false);
  });

  test("isInTime - after checks", () => {
    const data = "2023-06-16T08:30:00Z";

    const inTime = isInTime(data, "08:40", "after", "America/Santiago");
    const inTimeEqual = isInTime(data, "08:30", "after", "America/Santiago");
    const offTime = isInTime(data, "08:00", "after", "America/Santiago");

    expect(inTime).toBe(false);
    expect(inTimeEqual).toBe(true);
    expect(offTime).toBe(true);
  });

  test("isInTime", () => {
    const data = "2023-06-16T08:30:00Z";

    const inTime = isInTime(data, "08:40", "after", "America/Santiago");
    const inTimeEqual = isInTime(data, "08:30", "after", "America/Santiago");
    const offTime = isInTime(data, "08:00", "after", "America/Santiago");

    expect(inTime).toBe(false);
    expect(inTimeEqual).toBe(true);
    expect(offTime).toBe(true);
  });

  test("isInTime - midnight edge", () => {
    const dataBefore = "2023-06-16T02:59:00Z";
    const dataAfter = "2023-06-16T03:00:00Z";

    const before = isInTime(dataBefore, "12:00", "before", "America/Santiago");
    const after = isInTime(dataAfter, "12:00", "after", "America/Santiago");

    expect(before).toBe(true);
    expect(after).toBe(false);
  });

  test("getSchedule - single, multiple", () => {
    const schedulesOne = [
      {
        name: "workingday",
        type: "workingday",
        dayStart: 1,
        dayEnd: 5,
        time: {
          start: "08:30",
          end: "17:30",
        },
      },
    ];

    const schedulesTwo = [
      {
        name: "workingday",
        type: "workingday",
        dayStart: 1,
        dayEnd: 5,
        time: {
          start: "08:30",
          end: "17:30",
        },
      },
      {
        name: "workingday",
        type: "workingday",
        dayStart: 5,
        dayEnd: 5,
        time: {
          start: "08:30",
          end: "16:30",
        },
      },
    ];

    const single = getSchedules(
      "2023-08-03T08:30:00Z",
      "workingday",
      schedulesOne
    );
    const multiple = getSchedules(
      "2023-08-04T08:30:00Z",
      "workingday",
      schedulesTwo
    );

    expect(single.length).toBe(1);
    expect(multiple.length).toBe(2);
  });

  test("isHolliday - getting info", async () => {
    const hollidays = await getHollidays("2023-08-03T08:30:00Z");

    expect(hollidays.length).toBeGreaterThan(0);
  });
});
