#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int sum = 0;
    for (int i = 0; i < 10; i++)
    {
        int n = get_int("Numbers: ");
        sum = sum +n;
        printf("Sum: %i\n", sum);
    }
}
