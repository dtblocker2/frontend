import time

def another_function():
    print("This function runs after a blocking delay.")

print("Starting blocking delay...")
time.sleep(3) # Pause for 3 seconds
another_function()
print("Blocking delay finished.")


try:
    with open('example.txt', 'r') as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("Error: The file 'example.txt' was not found.")
except Exception as e:
    print(f"An unexpected error occurred: {e}")

print('this line will be printed after file reading is finished')