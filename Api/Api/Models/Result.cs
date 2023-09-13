namespace Api.Models
{
    public class Result
    {
        public int status { get; set; }
        public string? message { get; set; }
        public List<Location>? LocationList { get; set; }
    }
}
