/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Time Tracker
 * This describes the backend of a very basic time tracker.
 * OpenAPI spec version: 1.0.0
 */
import axios from "axios";

/* eslint-disable */

import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from "@tanstack/react-query";
import { rest } from "msw";
import { faker } from "@faker-js/faker";
export interface TimeEntry {
  id: string;
  comment: string;
  start: Date;
  end: Date;
}

/**
 * @summary Get all time entries
 */
export const getTimeEntries = (
  options?: AxiosRequestConfig
): Promise<AxiosResponse<TimeEntry[]>> => {
  return axios.get(`/timeEntries`, options);
};

export const getGetTimeEntriesQueryKey = () => [`/timeEntries`] as const;

export const getGetTimeEntriesQueryOptions = <
  TData = Awaited<ReturnType<typeof getTimeEntries>>,
  TError = AxiosError<unknown>
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getTimeEntries>>,
    TError,
    TData
  >;
  axios?: AxiosRequestConfig;
}): UseQueryOptions<
  Awaited<ReturnType<typeof getTimeEntries>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetTimeEntriesQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getTimeEntries>>> = ({
    signal,
  }) => getTimeEntries({ signal, ...axiosOptions });

  return { queryKey, queryFn, ...queryOptions };
};

export type GetTimeEntriesQueryResult = NonNullable<
  Awaited<ReturnType<typeof getTimeEntries>>
>;
export type GetTimeEntriesQueryError = AxiosError<unknown>;

/**
 * @summary Get all time entries
 */
export const useGetTimeEntries = <
  TData = Awaited<ReturnType<typeof getTimeEntries>>,
  TError = AxiosError<unknown>
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getTimeEntries>>,
    TError,
    TData
  >;
  axios?: AxiosRequestConfig;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetTimeEntriesQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Add a new time entry
 */
export const addTimeEntry = (
  timeEntry: TimeEntry,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<unknown>> => {
  return axios.post(`/timeEntries`, timeEntry, options);
};

export const getAddTimeEntryMutationOptions = <
  TError = AxiosError<void>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof addTimeEntry>>,
    TError,
    { data: TimeEntry },
    TContext
  >;
  axios?: AxiosRequestConfig;
}): UseMutationOptions<
  Awaited<ReturnType<typeof addTimeEntry>>,
  TError,
  { data: TimeEntry },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof addTimeEntry>>,
    { data: TimeEntry }
  > = (props) => {
    const { data } = props ?? {};

    return addTimeEntry(data, axiosOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type AddTimeEntryMutationResult = NonNullable<
  Awaited<ReturnType<typeof addTimeEntry>>
>;
export type AddTimeEntryMutationBody = TimeEntry;
export type AddTimeEntryMutationError = AxiosError<void>;

/**
 * @summary Add a new time entry
 */
export const useAddTimeEntry = <
  TError = AxiosError<void>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof addTimeEntry>>,
    TError,
    { data: TimeEntry },
    TContext
  >;
  axios?: AxiosRequestConfig;
}) => {
  const mutationOptions = getAddTimeEntryMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary Update an existing time entry
 */
export const updateTimeEntry = (
  timeEntry: TimeEntry,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<unknown>> => {
  return axios.put(`/timeEntries`, timeEntry, options);
};

export const getUpdateTimeEntryMutationOptions = <
  TError = AxiosError<void>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateTimeEntry>>,
    TError,
    { data: TimeEntry },
    TContext
  >;
  axios?: AxiosRequestConfig;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateTimeEntry>>,
  TError,
  { data: TimeEntry },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateTimeEntry>>,
    { data: TimeEntry }
  > = (props) => {
    const { data } = props ?? {};

    return updateTimeEntry(data, axiosOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdateTimeEntryMutationResult = NonNullable<
  Awaited<ReturnType<typeof updateTimeEntry>>
>;
export type UpdateTimeEntryMutationBody = TimeEntry;
export type UpdateTimeEntryMutationError = AxiosError<void>;

/**
 * @summary Update an existing time entry
 */
export const useUpdateTimeEntry = <
  TError = AxiosError<void>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateTimeEntry>>,
    TError,
    { data: TimeEntry },
    TContext
  >;
  axios?: AxiosRequestConfig;
}) => {
  const mutationOptions = getUpdateTimeEntryMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * Returns a single time entry
 * @summary Find time entry by ID
 */
export const getTimeEntryById = (
  timeEntryId: number,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<TimeEntry>> => {
  return axios.get(`/timeEntries/${timeEntryId}`, options);
};

export const getGetTimeEntryByIdQueryKey = (timeEntryId: number) =>
  [`/timeEntries/${timeEntryId}`] as const;

export const getGetTimeEntryByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getTimeEntryById>>,
  TError = AxiosError<void>
>(
  timeEntryId: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getTimeEntryById>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }
): UseQueryOptions<
  Awaited<ReturnType<typeof getTimeEntryById>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetTimeEntryByIdQueryKey(timeEntryId);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getTimeEntryById>>
  > = ({ signal }) =>
    getTimeEntryById(timeEntryId, { signal, ...axiosOptions });

  return { queryKey, queryFn, enabled: !!timeEntryId, ...queryOptions };
};

export type GetTimeEntryByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getTimeEntryById>>
>;
export type GetTimeEntryByIdQueryError = AxiosError<void>;

/**
 * @summary Find time entry by ID
 */
export const useGetTimeEntryById = <
  TData = Awaited<ReturnType<typeof getTimeEntryById>>,
  TError = AxiosError<void>
>(
  timeEntryId: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getTimeEntryById>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetTimeEntryByIdQueryOptions(timeEntryId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Deletes a time entry
 */
export const deleteTimeEntry = (
  timeEntryId: number,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<unknown>> => {
  return axios.delete(`/timeEntries/${timeEntryId}`, options);
};

export const getDeleteTimeEntryMutationOptions = <
  TError = AxiosError<void>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteTimeEntry>>,
    TError,
    { timeEntryId: number },
    TContext
  >;
  axios?: AxiosRequestConfig;
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteTimeEntry>>,
  TError,
  { timeEntryId: number },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteTimeEntry>>,
    { timeEntryId: number }
  > = (props) => {
    const { timeEntryId } = props ?? {};

    return deleteTimeEntry(timeEntryId, axiosOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type DeleteTimeEntryMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteTimeEntry>>
>;

export type DeleteTimeEntryMutationError = AxiosError<void>;

/**
 * @summary Deletes a time entry
 */
export const useDeleteTimeEntry = <
  TError = AxiosError<void>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteTimeEntry>>,
    TError,
    { timeEntryId: number },
    TContext
  >;
  axios?: AxiosRequestConfig;
}) => {
  const mutationOptions = getDeleteTimeEntryMutationOptions(options);

  return useMutation(mutationOptions);
};

export const getGetTimeEntriesMock = () =>
  Array.from(
    { length: faker.datatype.number({ min: 1, max: 10 }) },
    (_, i) => i + 1
  ).map(() => ({
    id: faker.random.word(),
    comment: faker.random.word(),
    start: `${faker.date.past().toISOString().split(".")[0]}Z`,
    end: `${faker.date.past().toISOString().split(".")[0]}Z`,
  }));

export const getGetTimeEntryByIdMock = () => ({
  id: faker.random.word(),
  comment: faker.random.word(),
  start: `${faker.date.past().toISOString().split(".")[0]}Z`,
  end: `${faker.date.past().toISOString().split(".")[0]}Z`,
});

export const getTimeTrackerMSW = () => [
  rest.get("*/timeEntries", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getGetTimeEntriesMock())
    );
  }),
  rest.post("*/timeEntries", (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, "Mocked status"));
  }),
  rest.put("*/timeEntries", (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, "Mocked status"));
  }),
  rest.get("*/timeEntries/:timeEntryId", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getGetTimeEntryByIdMock())
    );
  }),
  rest.delete("*/timeEntries/:timeEntryId", (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, "Mocked status"));
  }),
];
