import { QueryClient } from "@tanstack/react-query";

type FetcherOptions = {
  on401?: "returnNull" | "redirect";
};

export const apiRequest = async (
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  url: string,
  body?: any,
  options?: RequestInit
): Promise<Response> => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options?.headers,
  };

  const response = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    credentials: "include",
    ...options,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || response.statusText);
  }

  return response;
};

export const getQueryFn = (options: FetcherOptions = {}) => {
  return async ({ queryKey }: { queryKey: string[] }) => {
    const [url] = queryKey;
    try {
      const res = await apiRequest("GET", url);
      return await res.json();
    } catch (error: any) {
      if (error.message === "Unauthorized" && options.on401 === "returnNull") {
        return null;
      }
      throw error;
    }
  };
};

export const defaultQueryFn = getQueryFn();

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});