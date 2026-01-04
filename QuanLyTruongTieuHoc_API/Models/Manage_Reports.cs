using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class Manage_Reports
    {
    }
    public class Manage_AcademicSummary
    {
        public int TotalStudents { get; set; }
        public int ExcellentCount { get; set; }
        public decimal ExcellentPercent { get; set; }
        public int NeedImproveCount { get; set; }
        public decimal NeedImprovePercent { get; set; }
    }

    public class Manage_AcademicDistribution
    {
        public string XepLoai { get; set; } = "";
        public int SoLuong { get; set; }
        public decimal TiLe { get; set; }
    }

    public class Manage_AttendanceByClassRow
    {
        public string ClassName { get; set; } = "";
        public int TotalStudents { get; set; }
        public int PresentCount { get; set; }
        public int AbsentCount { get; set; }
        public int LateCount { get; set; }
        public decimal PresentPercent { get; set; }
    }

    public class Manage_MonthlyAttendanceTrend
    {
        public string Thang { get; set; } = ""; // T9, T10...
        public decimal TiLeChuyenCan { get; set; }
    }


}
