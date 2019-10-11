import toastr from 'toastr';

export default {
  success(message: string): void {
    toastr.success(message);
  },
  error(message: string): void {
    toastr.error(message);
  },
  warning(message: string): void {
    toastr.warning(message);
  },
  info(message: string): void {
    toastr.info(message);
  },
};
