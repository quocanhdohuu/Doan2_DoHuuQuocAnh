using BLL;
using DAL.Helper;
using DAL;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddScoped<DatabaseHelper>();
builder.Services.AddScoped<Admin_UsersDAL>();
builder.Services.AddScoped<Admin_UsersBLL>();
builder.Services.AddScoped<Admin_EventsBLL>();
builder.Services.AddScoped<Admin_EventsDAL>();
builder.Services.AddScoped<Admin_SubjectsDAL>();
builder.Services.AddScoped<Admin_SubjectsBLL>();
builder.Services.AddScoped<Admin_StudentsDAL>();
builder.Services.AddScoped<Admin_StudentsBLL>();
builder.Services.AddScoped<Admin_ClassesDAL>();
builder.Services.AddScoped<Admin_ClassesBLL>();
builder.Services.AddScoped<Admin_TeachersDAL>();
builder.Services.AddScoped<Admin_TeachersBLL>();
builder.Services.AddScoped<Admin_SchedulesDAL>();
builder.Services.AddScoped<Admin_SchedulesBLL>();
builder.Services.AddScoped<Admin_ReportsDAL>();
builder.Services.AddScoped<Admin_ReportsBLL>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

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
