namespace Application.Core
{
    public class AppException
    {
        public AppException(int statuscode, string message, string details = null)
        {
            Statuscode = statuscode;
            Details = details;
            Message = message;

        }
        public int Statuscode { get; set; }
        public string Message { get; set; }
        public string Details { get; set; }
    }
}