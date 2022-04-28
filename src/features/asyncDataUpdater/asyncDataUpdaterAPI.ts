// A mock function to mimic making an async request for data
export function fetchCount(len = 1) {
  return new Promise<{ data: number[] }>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: Array.from({ length: len }).map((val) => Math.random() * 100),
        }),
      500
    )
  );
}
