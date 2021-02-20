# Python3 program to find the sum 
# of each row and column of a matrix 

# import numpy library as np alias 
import numpy as np 

# Get the size m and n 
m , n = 3, 4		

# Function to calculate sum of each row 
def row_sum(arr,row,col) : 

	sum = 0

	print("\nFinding Sum of each row:\n") 

	# finding the row sum 
	for i in range(row) : 
		for j in range(col) : 

			# Add the element 
			sum += arr[i][j] 

		# Print the row sum 
		print("Sum of the row",i,"=",sum) 

		# Reset the sum 
		sum = 0


# Function to calculate sum of each column 
def column_sum(arr,row,col) : 

	sum = 0

	print("\nFinding Sum of each column:\n") 

	# finding the column sum 
	for j in range(col) : 
		for i in range(row) : 

			# Add the element 
			sum += arr[i][j] 

		# Print the column sum 
		print("Sum of the column",j,"=",sum) 

		# Reset the sum 
		sum = 0

		

# Driver code	 
if __name__ == "__main__" : 

	arr = [[1, 2,   3,  4],
           [5, 6,   7,  8],
           [9, 10, 11, 12]]

				
	# Get each row sum 
	row_sum(arr,m,n) 

	# Get each column sum 
	column_sum(arr,m,n) 


