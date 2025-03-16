import { RootWhereInput } from "./RootWhereInput";
import { RootOrderByInput } from "./RootOrderByInput";

export type RootFindManyArgs = {
  where?: RootWhereInput;
  orderBy?: Array<RootOrderByInput>;
  skip?: number;
  take?: number;
};
