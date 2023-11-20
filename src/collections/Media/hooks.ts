import { CollectionBeforeOperationHook } from "payload/types";

/**
 * Sanitizes the filename for upload collections to not include spaces or special characters
 */
export const renameMediaFile: CollectionBeforeOperationHook = async ({ args, operation }) => {
  const files = args.req?.files;
  if (operation === "create" && typeof files?.file?.name === "string") {
    console.info(args.data);
    files.file.name = args.data.type + "-" + files.file.name;
  }
};
