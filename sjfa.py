def get_positive_integer(prompt):
    """Prompt the user to enter a positive integer."""
    while True:
        try:
            value = int(input(prompt))
            if value <= 0:
                raise ValueError("Value must be a positive integer.")
            return value
        except ValueError as e:
            print(f"Error: {e}. Please try again.")

def get_non_negative_integer(prompt):
    """Prompt the user to enter a non-negative integer."""
    while True:
        try:
            value = int(input(prompt))
            if value < 0:
                raise ValueError("Value must be a non-negative integer.")
            return value
        except ValueError as e:
            print(f"Error: {e}. Please try again.")

def get_process_data():
    """Collect process data from the user."""
    processes = []
    n = get_positive_integer("Enter the number of processes: ")
    for i in range(n):
        print(f"\nProcess {i+1}")
        arrival_time = get_non_negative_integer("Enter arrival time: ")
        burst_time = get_non_negative_integer("Enter burst time: ")
        # Append process data: [ID, arrival time, burst time, start time, completion time, turnaround time, waiting time]
        processes.append([i+1, arrival_time, burst_time, 0, 0, 0, 0])
    return processes

def calculate_sjf(processes):
    """Calculate times for Shortest Job First (SJF) scheduling."""
    n = len(processes)
    current_time = 0
    total_turnaround = 0
    total_waiting = 0
    completed = 0
    is_completed = [0] * n  # Track if processes are completed

    while completed < n:
        # Filter processes that have arrived and are not yet completed
        available_processes = [p for p in processes if p[1] <= current_time and is_completed[processes.index(p)] == 0]
        
        if available_processes:
            # Select the process with the shortest burst time among available processes
            shortest_process = min(available_processes, key=lambda x: x[2])
            idx = processes.index(shortest_process)
            
            # Update process times
            processes[idx][3] = current_time  # Start time
            processes[idx][4] = processes[idx][3] + processes[idx][2]  # Completion time
            processes[idx][5] = processes[idx][4] - processes[idx][1]  # Turnaround time
            processes[idx][6] = processes[idx][5] - processes[idx][2]  # Waiting time
            
            # Accumulate totals
            total_turnaround += processes[idx][5]
            total_waiting += processes[idx][6]
            
            is_completed[idx] = 1  # Mark this process as completed
            completed += 1
            current_time = processes[idx][4]  # Update current time to the completion time of the process
        else:
            # If no processes are available to run, increment current time
            current_time += 1

    # Compute average turnaround and waiting times
    avg_turnaround = total_turnaround / n
    avg_waiting = total_waiting / n

    return processes, avg_turnaround, avg_waiting

def display_results(processes, avg_turnaround_time, avg_waiting_time):
    """Display the scheduling results."""
    print("\nProcess ID  Arrival Time  Burst Time  Completion Time  Turnaround Time  Waiting Time")
    for p in processes:
        # Print each process's data
        print(f"{p[0]:^10d} {p[1]:^13d} {p[2]:^11d} {p[4]:^16d} {p[5]:^16d} {p[6]:^12d}")
    
    # Print average turnaround and waiting times
    print(f"\nAverage Turnaround Time = {avg_turnaround_time:.2f}")
    print(f"Average Waiting Time = {avg_waiting_time:.2f}")

def main():
    """Main function to run the Shortest Job First (SJF) scheduling."""
    try:
        processes = get_process_data()  # Collect data from the user
        results, avg_turnaround_time, avg_waiting_time = calculate_sjf(processes)  # Perform SJF scheduling
        display_results(results, avg_turnaround_time, avg_waiting_time)  # Display results
    except ValueError:
        print("Error: Please enter valid integer values for all inputs.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    main()
