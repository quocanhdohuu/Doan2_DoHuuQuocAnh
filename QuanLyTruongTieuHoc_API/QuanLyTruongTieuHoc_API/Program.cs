using BLL;
using DAL.Helper;
using DAL;
using QuanLyTruongTieuHoc_API.Controllers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddScoped<DatabaseHelper>();
builder.Services.AddScoped<UsersDAL>();
builder.Services.AddScoped<UsersBLL>();
builder.Services.AddScoped<Teacher_StudentsDAL>();
builder.Services.AddScoped<Teacher_StudentsBLL>();
builder.Services.AddScoped<Teacher_ScoreDAL>();
builder.Services.AddScoped<Teacher_ScoreBLL>();
builder.Services.AddScoped<Teacher_TeachersBLL>();
builder.Services.AddScoped<Teacher_TeachersDAL>();
builder.Services.AddScoped<Teacher_TeachersClassBLL>();
builder.Services.AddScoped<Teacher_TeachersClassDAL>();
builder.Services.AddScoped<Teacher_AttendanceBLL>();
builder.Services.AddScoped<Teacher_AttendanceDAL>();
builder.Services.AddScoped<Teacher_ParentsBLL>();
builder.Services.AddScoped<Teacher_ParentsDAL>();
builder.Services.AddScoped<Teacher_HealthDailyBLL>();
builder.Services.AddScoped<Teacher_HealthDailyDAL>();
builder.Services.AddScoped<Teacher_MessagesBLL>();
builder.Services.AddScoped<Teacher_MessagesDAL>();
builder.Services.AddScoped<Teacher_ScheduleBLL>();
builder.Services.AddScoped<Teacher_ScheduleDAL>();


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors("AllowAll");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
