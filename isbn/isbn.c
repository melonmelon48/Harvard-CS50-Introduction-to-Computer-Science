#include <cs50.h>
#include <stdio.h>

int main(void)
{

    // Prompt for a long ISBN

    long isbn = get_long("ISBN: ");

    int sum = 0;

    for (int i = 10; i > 0; i--)
    {
        int digit = isbn % 10;
        sum += digit * i;

        isbn = isbn / 10;
    }

    if (sum % 11 == 0)
    {
        printf("YES\n");
    }

    else if (sum % 11 != 0)
    {
        printf("NO\n");
    }
}
