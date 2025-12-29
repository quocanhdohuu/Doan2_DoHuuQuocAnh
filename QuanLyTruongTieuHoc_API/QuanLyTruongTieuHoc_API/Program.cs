using BLL;
using DAL.Helper;
using DAL;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddScoped<DatabaseHelper>();
builder.Services.AddScoped<UsersDAL>();
builder.Services.AddScoped<UsersBLL>();
builder.Services.AddScoped<PhuHuynh_Event_DAL>();
builder.Services.AddScoped<PhuHuynh_Event_BLL>();
builder.Services.AddScoped<PhuHuynh_Student_DAL>();
builder.Services.AddScoped<PhuHuynh_Student_BLL>();
builder.Services.AddScoped<PhuHuynh_Parents_DAL>();
builder.Services.AddScoped<PhuHuynh_Parents_BLL>();
builder.Services.AddScoped<PhuHuynh_Messager_DAL>();
builder.Services.AddScoped<PhuHuynh_Messager_BLL>();
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
