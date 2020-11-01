export enum ImageComparationOption {
    UPLOAD_LATEST_FIRST,
    UPLOAD_OLDEST_FIRST,
    STATUS_ASC,
    STATUS_DESC,
    USER_ASC,
    USER_DESC
}

export function getOrderByClause(option: ImageComparationOption): string {
    switch (option) {
        case ImageComparationOption.UPLOAD_LATEST_FIRST:
            return 'ORDER BY "Images"."uploadedDate" DESC';
        case ImageComparationOption.UPLOAD_OLDEST_FIRST:
            return 'ORDER BY "Images"."uploadedDate"';
        case ImageComparationOption.STATUS_ASC:
            return 'ORDER BY "Images".status';
        case ImageComparationOption.STATUS_DESC:
            return 'ORDER BY "Images".status DESC';
        case ImageComparationOption.STATUS_ASC:
            return 'ORDER BY "Images"."uploadedBy"';
        case ImageComparationOption.STATUS_DESC:
            return 'ORDER BY "Images"."uploadedBy" DESC';
        default:
            return '';
    }
}