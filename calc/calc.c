#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>

int main(int argc, string argv[])
{
    // Check for correct arguments
    if (argc != 4)
    {
        printf("Usage: ./calc <number> <operator> <number>\n");
        return 1;
    }

    float a = atof(argv[1]);
    float b = atof(argv[3]);

    char operator= argv[2][0];

    if (operator== '+')
    {
        printf("%f\n", a + b);
    }
    else if (operator== '-')
    {
        printf("%f\n", a - b);
    }
    else if (operator== 'x')
    {
        printf("%f\n", a * b);
    }
    else if (operator== '/')
    {
        printf("%f\n", a / b);
    }
    else if (operator== '%')
    {
        int x = a / b;
        printf("%f\n", a - (b * x));
    }
    else
    {
        return 1;
    }
}
