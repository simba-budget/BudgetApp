export const tryParseJson = <T>(
  value: string,
): { success: boolean; data: T | null } => {
  try {
    const data = JSON.parse(value);
    return { success: true, data };
  } catch (error) {
    return { success: false, data: null };
  }
};
