import env from "env";

export function createApiClient({
  accessToken,
  onError,
  onUnauthorized,
}: {
  accessToken: string;
  onError: (err: unknown, label: string) => void;
  onUnauthorized: (hideError?: boolean) => void;
}) {
  const headers: Record<string, string> = { authorization: accessToken };

  const createUrl = (urlStr: string, params?: object) => {
    const url = new URL([env.API_FULL_PATH, urlStr].join("/"));
    if (params) Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

    return url.href;
  };

  const handleErrorResponse = async (res: Response, errorMessage: string): Promise<void> => {
    if (res?.status === 401) return onUnauthorized();
    const err = await res.json();
    onError(err, errorMessage);
  };

  return {
    uploadFile: async ({ file, fileName }: { file: File; fileName: string }): Promise<string> => {
      const errorMessage = "Error uplouding a file";
      try {
        const url = createUrl("upload_file");
        const formData = new FormData();
        formData.append("fileName", fileName);
        formData.append("file", file);
        const res = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "text/plain",
            ...headers,
          },
          body: formData,
        });
        if (!res.ok) {
          handleErrorResponse(res, errorMessage);
        } else {
          return res.text();
        }
      } catch (err) {
        onError(err, errorMessage);
      }
    },
    request: async ({
      path,
      request,
      errorMessage,
    }: {
      path: string;
      request: RequestInit;
      errorMessage: string;
    }): Promise<Response> => {
      // if (!headers?.authorization) {
      //   onUnauthorized(true);
      //   return;
      // }
      try {
        const url = createUrl(path);
        const res = await fetch(url, { ...request, headers: { ...headers, ...request.headers } });
        if (!res.ok) {
          handleErrorResponse(res, errorMessage);
        } else {
          return res;
        }
      } catch (err) {
        onError(err, errorMessage);
      }
      return null;
    },
  };
}

export type TApiClient = ReturnType<typeof createApiClient>;
